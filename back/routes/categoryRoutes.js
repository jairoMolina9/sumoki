const express = require('express');
const router = express.Router();
const Category = require('../models/MenuCategory');
const MenuItem = require('../models/MenuItem');

// GET: Retrieve the menu for a specific restaurant
// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/:categoryId/items', async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findById(categoryId).populate('items');

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Return the category along with its items
    res.json(category);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    res.json(newCategory);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/:categoryId/items', async (req, res) => {
  const { categoryId } = req.params;
  const { items } = req.body; // Expect an array of items

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const menuItems = await MenuItem.insertMany(
      items.map(item => ({ ...item, category: categoryId }))
    );

    category.items.push(...menuItems.map(item => item._id));
    await category.save();

    res.status(201).json(menuItems);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;