const mongoose = require("mongoose");
const Product = require("../models/product");

//Create a new product
async function handleCreateProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body); 
    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct
    });
  } catch (error) {
    console.error("Create product error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Get all products
async function handleGetAllProducts(req, res) {
  try {
    const products = await Product.find().populate("user", "name email"); 
    return res.status(200).json({ products });
  } catch (error) {
    console.error("Get all products error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Get all products by a specific user
async function handleGetProductsByUser(req, res) {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    const products = await Product.find({ user: userId });
    return res.status(200).json({ products });
  } catch (error) {
    console.error("Get user's products error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Delete a product by ID
async function handleDeleteProductById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct
    });
  } catch (error) {
    console.error("Delete product error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Update a product by ID
async function handleUpdateProductById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    const updatedData={
        ...req.body,
        productUpdatedAt: new Date()
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    console.error("Update product error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleCreateProduct,
  handleGetAllProducts,
  handleGetProductsByUser,
  handleDeleteProductById,
  handleUpdateProductById
};
