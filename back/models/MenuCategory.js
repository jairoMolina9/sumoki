const mongoose = require('mongoose');

// Menu Category Schema
const MenuCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }] // Reference to MenuItem, // Embed menu items
});

module.exports = mongoose.model('MenuCategory', MenuCategorySchema);