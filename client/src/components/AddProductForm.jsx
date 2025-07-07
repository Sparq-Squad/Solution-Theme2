import { useContext, useState, useRef, useEffect } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Button from "./ui/Button";
import { motion } from "framer-motion";

const ProductFormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    description: "",
  });

  const { handleAddProduct } = useContext(DashboardContext);
  const [productImages, setProductImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const imageInputRef = useRef(null);

  const categories = [
    "Electronics",
    "Clothing & Fashion",
    "Home & Garden",
    "Sports & Outdoors",
    "Books & Media",
    "Health & Beauty",
    "Toys & Games",
    "Automotive",
    "Food & Beverages",
    "Office & Business",
  ];

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".category-dropdown")) {
        setShowCategoryDropdown(false);
      }
    };
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!value.trim()) error = "Product name is required";
        else if (value.length > 100) error = "Name must be < 100 characters";
        break;
      case "category":
        if (!value) error = "Category is required";
        break;
      case "minPrice":
        if (!value) error = "Minimum price is required";
        else if (isNaN(value) || parseFloat(value) < 0)
          error = "Must be a positive number";
        break;
      case "maxPrice":
        if (!value) error = "Maximum price is required";
        else if (isNaN(value) || parseFloat(value) < 0)
          error = "Must be a positive number";
        else if (parseFloat(formData.minPrice) > parseFloat(value))
          error = "Must be ≥ minimum price";
        break;
      case "description":
        if (!value.trim()) error = "Description is required";
        else if (value.length > 1000)
          error = "Description must be < 1000 characters";
        break;
    }
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return !error;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const triggerFileInput = () => imageInputRef.current.click();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) =>
        setProductImages((prev) => [...prev, e.target.result]);
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setProductImages((prev) => prev.filter((_, i) => i !== index));
    if (mainImageIndex >= index && mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const handleSaveDraft = () => alert("Form saved to draft!");

  const handleSubmit = () => {
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      if (!validateField(key, formData[key])) isValid = false;
    });
    if (!isValid) return;

    const imageUrl =
      productImages.length > 0
        ? productImages[mainImageIndex]
        : "https://via.placeholder.com/300x300";

    handleAddProduct({
      id: Date.now().toString(),
      ...formData,
      image: imageUrl,
    });

    setFormData({
      name: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      description: "",
    });
    setProductImages([]);
    setMainImageIndex(0);
    setErrors({});
  };

  return (
    <motion.div
      layout
      className="mx-auto my-8  bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-2xl border border-[#2c2f38] p-4 md:p-6 shadow-xl text-white transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Form */}
        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-xl font-bold text-yellow-400">
            General Information
          </h3>
          {["name", "category", "minPrice", "maxPrice", "description"].map(
            (field) => (
              <div key={field} className="space-y-1">
                <label className="block text-sm text-gray-300 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>

                {field === "category" ? (
                  <div className="relative category-dropdown space-y-1">
                    <label className="block text-sm text-gray-300">
                      
                    </label>

                    {/* Dropdown Trigger */}
                    <div
                      className={`p-3 border rounded-md bg-[#1a1c23] text-yellow-300 font-medium flex items-center justify-between cursor-pointer ${
                        errors.category ? "border-red-500" : "border-[#3f434f]"
                      }`}
                      onClick={() => setShowCategoryDropdown((prev) => !prev)}
                    >
                      <span>{formData.category || "Select a category"}</span>
                      <svg
                        className={`w-4 h-4 ml-2 text-gray-400 transition-transform duration-200 ${
                          showCategoryDropdown ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Dropdown Options */}
                    {showCategoryDropdown && (
                      <div className="absolute z-50 mt-1 w-full bg-[#161a23] border border-[#3f434f] rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {categories.map((cat) => (
                          <div
                            key={cat}
                            className="px-4 py-2 hover:bg-yellow-100 hover:text-black text-yellow-300 cursor-pointer transition-colors"
                            onClick={() => {
                              handleInputChange("category", cat);
                              setShowCategoryDropdown(false); // Auto-close on select
                            }}
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Error message */}
                    {errors.category && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.category}
                      </p>
                    )}
                  </div>
                ) : field === "description" ? (
                  <textarea
                    rows="4"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className={`w-full p-2 bg-[#1a1c23] border rounded-md resize-none text-yellow-100 ${
                      errors.description ? "border-red-500" : "border-[#3f434f]"
                    }`}
                  />
                ) : (
                  <input
                    type={field.includes("Price") ? "number" : "text"}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className={`w-full p-2 bg-[#1a1c23] border rounded-md text-yellow-100 ${
                      errors[field] ? "border-red-500" : "border-[#3f434f]"
                    }`}
                  />
                )}

                {errors[field] && (
                  <p className="text-xs text-red-400">{errors[field]}</p>
                )}
              </div>
            )
          )}
        </div>

        {/* Right Image Upload */}
        <div className="w-full md:w-1/3 space-y-4">
          <h3 className="text-xl font-bold text-yellow-400">Product Image</h3>
          <div
            onClick={triggerFileInput}
            className="h-64 bg-[#1a1c23] flex items-center justify-center border-2 border-dashed border-[#3f434f] rounded-xl cursor-pointer hover:border-yellow-400 transition"
          >
            {productImages.length > 0 ? (
              <img
                src={productImages[mainImageIndex]}
                alt="Product"
                className="object-cover h-full w-full rounded-xl"
              />
            ) : (
              <p className="text-sm text-gray-400 text-center">
                Tap to upload image
                <br />
                (PNG, JPG up to 5MB)
              </p>
            )}
          </div>

          {productImages.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {productImages.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setMainImageIndex(i)}
                    className={`w-16 h-16 object-cover rounded-md border-2 ${
                      i === mainImageIndex
                        ? "border-yellow-400"
                        : "border-[#3f434f]"
                    } cursor-pointer transition`}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(i);
                    }}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />

          <button
            onClick={triggerFileInput}
            className="w-full p-2 bg-[#1a1c23] border border-[#3f434f] rounded-md hover:bg-yellow-100 hover:text-black transition"
          >
            + Add Another Image
          </button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={handleSaveDraft}
          className="px-4 py-2 rounded-md border border-gray-500 text-gray-300 hover:bg-gray-700 transition"
        >
          Save to draft
        </button>
        <Button
          onClick={handleSubmit}
          disabled={
            !formData.name ||
            !formData.category ||
            !formData.minPrice ||
            !formData.maxPrice ||
            !formData.description
          }
          className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save product
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductFormCard;
