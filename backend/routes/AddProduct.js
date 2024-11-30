const express = require("express");
const router = express.Router();
const {
  Product,
  Electronics,
  Cosmetics,
  Fashion,
} = require("../models/Product");

router.post("/addproduct", async (req, res) => {
  try {
    const Product = {
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
    };

    switch (req.body.category.toLowerCase()) {
      case "electronics":
        await Electronics.create({
          name: req.body.name,
          price: req.body.price,
          category: req.body.category,
          brand: req.body.brand,
          model: req.body.brand,
          warranty: req.body.warranty,
          specifications: req.body.specifications, // Electronics-specific fields: brand, model, warranty, specifications
        });
        break;

      case "cosmetics":
        await Cosmetics.create({
          name: req.body.name,
          price: req.body.price,
          category: req.body.category,
          brand: req.body.brand,
          ingredients: req.body.ingredients,
          skinType: req.body.skinType, // Cosmetics-specific fields: brand, ingredients, skinType
        });
        break;

      case "fashion":
        await Fashion.create({
          name: req.body.name,
          price: req.body.price,
          category: req.body.category,
          brand: req.body.brand,
          size: req.body.size, // e.g., 'S', 'M', 'L'
          material: req.body.material,
          gender: req.body.gender, // Fashion-specific fields: brand, size, material, gender
        });
        break;

      default:
        throw new Error("Invalid category specified");
    }
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
