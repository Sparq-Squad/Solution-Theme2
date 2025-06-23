import Button from './ui/Button';
import { useContext, useState, useRef } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const ProductFormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const { handleAddProduct } = useContext(DashboardContext);


  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [errors, setErrors] = useState({});
  const imageInputRef = useRef(null);

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    switch (field) {
      case 'name':
        if (!value.trim()) newErrors.name = 'Product name is required';
        else delete newErrors.name;
        break;
      case 'price':
        if (!value.trim()) newErrors.price = 'Price is required';
        else if (isNaN(Number(value))) newErrors.price = 'Must be a valid number';
        else delete newErrors.price;
        break;
      case 'description':
        if (!value.trim()) newErrors.description = 'Description is required';
        else delete newErrors.description;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const triggerFileInput = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const isValid = Object.keys(formData).reduce((acc, key) => {
      validateField(key, formData[key]);
      return acc;
    }, true);

    if (Object.keys(errors).length > 0) return;

    let imageUrl = "https://via.placeholder.com/300x300";

    if (productImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageUrl = e.target.result;
        createProduct(imageUrl);
      };
      reader.readAsDataURL(productImage);
    } else {
      createProduct(imageUrl);
    }
  };

  const createProduct = (imageUrl) => {
    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      price: formData.price,
      description: formData.description,
      image: imageUrl,
    };

    handleAddProduct(newProduct);
  };

  return (
    <div className="mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden p-6 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div
            onClick={triggerFileInput}
            className={`relative h-64 w-full bg-gray-100 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-all ${errors.image ? 'border-red-500' : 'border-gray-300'
              }`}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Product" className="object-cover w-full h-full rounded-lg" />
            ) : (
              <span className="text-sm text-gray-500 text-center px-4">
                Click to upload product image<br />(PNG, JPG up to 5MB)
              </span>
            )}
          </div>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {errors.image && <p className="text-xs text-red-500 mt-1">{errors.image}</p>}
        </div>

        <div className="md:w-2/3 space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter product name"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              id="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              placeholder="Enter price"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.price ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price}</p>}
          </div>

          <div className="space-y-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              rows="4"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter product description"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={!formData.name || !formData.price || !formData.description}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save Product
        </Button>
      </div>
    </div>
  );
};

export default ProductFormCard;