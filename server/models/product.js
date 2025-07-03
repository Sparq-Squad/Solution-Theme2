// models/Product.js
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    min:{
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  },
  images: [String], 
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDatas',
    required: true
  },
  productUpdatedAt: {
      type: Date,
      default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
