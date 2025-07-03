const express = require("express");
const {
  handleCreateProduct,
  handleGetProductsByUser,
  handleDeleteProductById,
  handleGetAllProducts,
  handleUpdateProductById
} = require("../controllers/product.js");

const router = express.Router();

// Health check
router.get("/health", (req, res) => {
  res.send("hello from product route! Health OK!");
});

// Create new product
router.post("/", handleCreateProduct);

// Get all products (optionally filtered by user)
router.get("/", handleGetAllProducts);

// Get products for a specific user
router.get("/user/:userId", handleGetProductsByUser);

// Delete a product by ID
router.delete("/:id", handleDeleteProductById);

// Update product by ID
router.patch("/:id", handleUpdateProductById);

module.exports = router;
