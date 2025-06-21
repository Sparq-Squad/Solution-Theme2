import React, { useState } from "react";
import { Navbar } from "./Navbar";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [additionalImages, setAdditionalImages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !itemType || !itemDescription) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Item added:", {
      itemName,
      itemType,
      itemDescription,
      coverImage,
      additionalImages,
    });

    alert("Item successfully added!");

    setItemName("");
    setItemType("");
    setItemDescription("");
    setCoverImage("");
    setAdditionalImages("");
  };

  return (
    <div id="add" className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-24 px-4 max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white"> + Add New Item</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
  
            <div>
              <label htmlFor="itemName" className="block mb-1 font-medium text-white">Item Name *</label>
              <input
                id="itemName"
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter Item Name"
                required
              />
            </div>
            <div>
              <label htmlFor="itemType" className="block mb-1 font-medium text-white">Item Type *</label>
              <select
                id="itemType"
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              >
                <option value="" className="text-black">Select item type</option>
                <option value="shirt">Shirt</option>
                <option value="pants">Pants</option>
                <option value="shoes">Shoes</option>
                <option value="sports-gear">Sports Gear</option>
                <option value="accessories">Accessories</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="itemDescription" className="block mb-1 font-medium text-white">Item Description *</label>
              <textarea
                id="itemDescription"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows="4"
                placeholder="Enter item description"
                required
              />
            </div>
            <div>
  <label htmlFor="coverImage" className="block mb-1 font-medium text-white">Cover Image</label>
  <input
    id="coverImage"
    type="file"
    accept="image/*"
    onChange={(e) => setCoverImage(e.target.files[0])}
    className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg px-3 py-2"
  />
</div>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
            >
              Add Item
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddItem;
