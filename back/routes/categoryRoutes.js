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

  if (!name) {
    return res.status(400).json({ error: "Category name is required" });
  }

  console.log(req.body);
  try {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res
        .status(400)
        .json({ error: "Category already exists", category: existingCategory });
    }

    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json({error: "Category already exists", category: newCategory});
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/:categoryId/items', async (req, res) => {
  const { categoryId } = req.params;
  const { items } = req.body;

  // Check if items is a non-empty array
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Items must be a non-empty array' });
  }

  // Validate each item
  for (const item of items) {
    if (!item.name || typeof item.name !== 'string' || !item.name.trim()) {
      return res.status(400).json({ error: 'Each item must have a valid name' });
    }
    if (!item.price || typeof item.price !== 'number' || item.price <= 0) {
      return res.status(400).json({ error: 'Each item must have a valid price' });
    }
  }

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Insert multiple items
    const menuItems = await MenuItem.insertMany(
      items.map((item) => ({ ...item, category: categoryId }))
    );

    // Update the category with the new items
    category.items.push(...menuItems.map((item) => item._id));
    await category.save();

    res.status(201).json(menuItems); // Return the created items
  } catch (err) {
    console.error('Error adding items:', err);
    res.status(500).json({ error: 'Server Error' });
  }
});



module.exports = router;