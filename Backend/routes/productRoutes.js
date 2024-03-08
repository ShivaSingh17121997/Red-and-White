// routes/productRoutes.js

const express = require('express');
const router = express.Router();

const ProductModel = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
