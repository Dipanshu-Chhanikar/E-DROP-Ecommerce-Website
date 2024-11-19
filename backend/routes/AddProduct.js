const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/addproduct", async (req, res) => {
  try {
    await Product.create({
      description: req.body.description,
      price: req.body.price,
      rating: req.body.rating,
      size: req.body.size,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
