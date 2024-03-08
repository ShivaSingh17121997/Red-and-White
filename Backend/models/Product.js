
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  oldPrice: Number,
  rating: Number,
  inStock: Number,
  image: String
});

const ProductModel = mongoose.model('Products', productSchema)
module.exports = ProductModel;
