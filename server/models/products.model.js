const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  description: String,
  image: String,
  reviews: [
    {
      user: String,
      comment: String,
      rating: Number,
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
