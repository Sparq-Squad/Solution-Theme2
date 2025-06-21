import React, { useState, useRef } from 'react';
import Button  from './ui/Button';
import  Label  from './ui/Label';
import  Input from './ui/Input';

// AddProductForm Component
const AddProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    productId: '',
    platform: '',
    price: '',
    status: ''
  });

  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [errors, setErrors] = useState({});
  
  const imageInputRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.productId.trim()) newErrors.productId = 'Product ID is required';
    if (!formData.platform) newErrors.platform = 'Platform is required';
    if (!formData.price.trim()) newErrors.price = 'Price is required';
    if (!formData.status) newErrors.status = 'Status is required';
    
    if (formData.price && isNaN(Number(formData.price))) {
      newErrors.price = 'Price must be a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    let imageUrl = "https://via.placeholder.com/100";
    
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
      productId: formData.productId,
      platform: formData.platform,
      price: formData.price,
      status: formData.status,
      image: imageUrl
    };

    onAddProduct(newProduct);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      productId: '',
      platform: '',
      price: '',
      status: ''
    });
    setProductImage(null);
    setImagePreview('');
    setErrors({});
    
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-8 bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-medium text-gray-800">Add New Product</h2>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter product name"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="productId">Product ID</Label>
            <Input
              id="productId"
              type="text"
              value={formData.productId}
              onChange={(e) => handleInputChange('productId', e.target.value)}
              placeholder="Enter product ID"
              className={errors.productId ? 'border-red-500' : ''}
            />
            {errors.productId && <p className="text-sm text-red-500">{errors.productId}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <select
              id="platform"
              value={formData.platform}
              onChange={(e) => handleInputChange('platform', e.target.value)}
              className={`w-full h-10 rounded-md border ${
                errors.platform ? 'border-red-500' : 'border-gray-300'
              } bg-white px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select platform</option>
              <option value="Amazon">Amazon</option>
              <option value="Flipkart">Flipkart</option>
              <option value="Walmart">Walmart</option>
              <option value="eBay">eBay</option>
              <option value="Shopify">Shopify</option>
            </select>
            {errors.platform && <p className="text-sm text-red-500">{errors.platform}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              placeholder="Enter price"
              className={errors.price ? 'border-red-500' : ''}
            />
            {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => handleInputChange('status', e.target.value)}
              className={`w-full h-10 rounded-md border ${
                errors.status ? 'border-red-500' : 'border-gray-300'
              } bg-white px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <input
              id="image"
              type="file"
              accept="image/*"
              ref={imageInputRef}
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {imagePreview && (
              <div className="mt-2">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-20 h-20 object-cover rounded border"
                />
              </div>
            )}
          </div>

          <div className="md:col-span-2 lg:col-span-3 flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProductForm;