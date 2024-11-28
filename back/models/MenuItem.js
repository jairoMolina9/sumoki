const mongoose = require("mongoose");

// Menu Item Schema
const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: { type: mongoose.Schema.Types.Decimal128, required: true, min: 0 }, // Updated to Decimal128

  photo: {
    type: String,
    default: "https://picsum.photos/300/300",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuCategory",
  }, // Reference to Category
});

// Middleware: Automatically convert Decimal128 fields to string with 2 decimal places
MenuItemSchema.set("toJSON", {
  transform: (doc, ret) => {
    if (ret.price) {
      const priceNumber = parseFloat(ret.price.toString()); // Convert Decimal128 to float
      ret.price = priceNumber.toFixed(2); // Format to 2 decimal places
    }
    return ret;
  },
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
