const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
