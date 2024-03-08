// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const ProductModel = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const categories = await  ProductModel.find({category:"men's clothing"});
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
