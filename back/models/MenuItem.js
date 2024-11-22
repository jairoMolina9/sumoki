const mongoose = require('mongoose');

// Menu Item Schema
const MenuItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    photo: {
        type: String,
        default: 'https://picsum.photos/300/300',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, ref: 'MenuCategory'
    } // Reference to Category

  });

  module.exports = mongoose.model('MenuItem', MenuItemSchema);;