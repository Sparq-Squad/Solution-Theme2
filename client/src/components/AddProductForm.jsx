import { useContext, useState, useRef } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Button from './ui/Button';

const ProductFormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    description: '',
  });

  const { handleAddProduct } = useContext(DashboardContext);

  const [productImages, setProductImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const imageInputRef = useRef(null);

  const categories = [
    'Electronics',
    'Clothing & Fashion',
    'Home & Garden',
    'Sports & Outdoors',
    'Books & Media',
    'Health & Beauty',
    'Toys & Games',
    'Automotive',
    'Food & Beverages',
    'Office & Business'
  ];

  const validateField = (fieldName, value) => {
    let error = '';
    
    switch (fieldName) {
      case 'name':
        if (!value.trim()) error = 'Product name is required';
        else if (value.length > 100) error = 'Name must be less than 100 characters';
        break;
      case 'category':
        if (!value) error = 'Category is required';
        break;
      case 'minPrice':
        if (!value) error = 'Minimum price is required';
        else if (isNaN(value) || parseFloat(value) < 0) error = 'Must be a valid positive number';
        break;
      case 'maxPrice':
        if (!value) error = 'Maximum price is required';
        else if (isNaN(value) || parseFloat(value) < 0) error = 'Must be a valid positive number';
        else if (parseFloat(formData.minPrice) > parseFloat(value)) error = 'Must be greater than minimum price';
        break;
      case 'description':
        if (!value.trim()) error = 'Description is required';
        else if (value.length > 1000) error = 'Description must be less than 1000 characters';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [fieldName]: error }));
    return !error;
  };

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    validateField(fieldName, value);
  };

  const triggerFileInput = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProductImages(prev => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (indexToRemove) => {
    setProductImages(prev => prev.filter((_, index) => index !== indexToRemove));
    if (mainImageIndex >= indexToRemove && mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const handleSaveDraft = () => {
    alert('Form saved to draft!');
  };

  const handleSubmit = () => {
    // Validate all fields
    let isValid = true;
    Object.keys(formData).forEach(key => {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    });

    if (!isValid) return;

    const imageUrl = productImages.length > 0 ? productImages[mainImageIndex] : "https://via.placeholder.com/300x300";

    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      category: formData.category,
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice,
      description: formData.description,
      image: imageUrl,
    };

    handleAddProduct(newProduct);
    
    // Clear the form after saving
    setFormData({
      name: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      description: '',
    });
    setProductImages([]);
    setMainImageIndex(0);
    setErrors({});
  };

  return (
    <div className="mx-auto my-8 bg-white rounded-lg border border-gray-300 overflow-hidden transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        {/* General Information Section - Left Side */}
        <div className="w-full md:w-2/3 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">General Information</h3>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder=""
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div className="space-y-1 relative">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <div 
                className={`w-full px-4 py-2 border rounded-md cursor-pointer ${
                  errors.category ? 'border-red-500' : 'border-gray-300'
                }`}
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                {formData.category || "Select a category"}
              </div>
              {showCategoryDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleInputChange('category', category);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
              {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="minPrice" className="block text-xs text-gray-500 mb-1">Minimum</label>
                  <input
                    id="minPrice"
                    type="number"
                    step="0.01"
                    value={formData.minPrice}
                    onChange={(e) => handleInputChange('minPrice', e.target.value)}
                    placeholder=""
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition ${
                      errors.minPrice ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.minPrice && <p className="text-xs text-red-500 mt-1">{errors.minPrice}</p>}
                </div>
                <div>
                  <label htmlFor="maxPrice" className="block text-xs text-gray-500 mb-1">Maximum</label>
                  <input
                    id="maxPrice"
                    type="number"
                    step="0.01"
                    value={formData.maxPrice}
                    onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                    placeholder=""
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition ${
                      errors.maxPrice ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.maxPrice && <p className="text-xs text-red-500 mt-1">{errors.maxPrice}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description / Features</label>
              <textarea
                id="description"
                rows="6"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder=""
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition resize-none ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
            </div>
          </div>
        </div>

        {/* Product Image Section - Right Side */}
        <div className="w-full md:w-1/3 p-6 border-t md:border-t-0 md:border-l border-gray-300">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Product Image</h3>
          
          {/* Main Image Display */}
          <div
            onClick={triggerFileInput}
            className={`relative h-64 w-full bg-gray-100 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-all ${
              errors.image ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {productImages.length > 0 ? (
              <img 
                src={productImages[mainImageIndex]} 
                alt="Product" 
                className="object-cover w-full h-full rounded-lg" 
              />
            ) : (
              <span className="text-sm text-gray-500 text-center px-4">
                Click to upload product image<br />(PNG, JPG up to 5MB)
              </span>
            )}
          </div>

          {/* Image Thumbnails */}
          {productImages.length > 0 && (
            <div className="flex gap-2 mt-4 flex-wrap">
              {productImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer ${
                      index === mainImageIndex ? 'border-blue-500' : 'border-gray-300'
                    }`}
                    onClick={() => setMainImageIndex(index)}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
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
          {errors.image && <p className="text-xs text-red-500 mt-1">{errors.image}</p>}
          
          {/* Add Another Image Button */}
          <button 
            onClick={triggerFileInput}
            className="w-full mt-4 px-4 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
          >
            + Add Another Image
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-300 flex justify-end gap-3">
        <button 
          onClick={handleSaveDraft}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Save to draft
        </button>
        <Button
          onClick={handleSubmit}
          disabled={!formData.name || !formData.category || !formData.minPrice || !formData.maxPrice || !formData.description}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save product
        </Button>
      </div>
    </div>
  );
};

export default ProductFormCard;