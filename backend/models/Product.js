const mongoose = require("mongoose");
const { Schema } = mongoose;

const BaseProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  category: {
    type:String,
    required:true
  },
},
  {discriminatorKey:'categoryType',collection:'products'}
);

const Product = mongoose.model("Product", BaseProductSchema);

const ElectronicSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String },
  warranty: { type: String },
  specifications: { type: Object },
});

const CosmeticsSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  ingredients: { type: [String] },
  skinType: { type: String }, // e.g., 'dry', 'oily', 'combination'
});

// Fashion Schema
const FashionSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  size: { type: String }, // e.g., 'S', 'M', 'L'
  material: { type: String },
  gender: { type: String }, // e.g., 'male', 'female', 'unisex'
});

const Electronics = Product.discriminator('Electronics',ElectronicSchema);
const Cosmetics = Product.discriminator('Cosmetics', CosmeticsSchema);
const Fashion = Product.discriminator('Fashion', FashionSchema);

module.exports = {Product,Electronics,Cosmetics,Fashion};
