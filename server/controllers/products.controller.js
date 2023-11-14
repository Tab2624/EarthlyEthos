const { faker } = require('@faker-js/faker');
const Category = require('../models/category.model');
const Product = require('../models/products.model');

const categories = [
  'Home',
  'Clothing',
  'Lifestyle Outdoors',
  'Pet Products',
  'Personal Care',
  'Essentials',
  'Upcycled and Recycled',
  'Garden',
];

// Utility function for generating product names
const generateProductName = (category) => {
  return `${category} Product`;
};

// Function to create a fake product
const createFakeProduct = (category) => {
  try {
    const productName = generateProductName(category);
    const description = faker.commerce.productDescription(category);
    const price = faker.commerce.price(category);

    return { productName, price, description, category: null }; // Initialize category as null
  } catch (error) {
    console.error("Error creating fake product:", error);
    throw error;
  }
};

const addFakeProductToCategory = async (categoryName) => {
  try {
    // Check if the category already exists
    let category = await Category.findOne({ name: categoryName });

    if (!category) {
      // If the category doesn't exist, create it
      category = await Category.create({ name: categoryName, products: [] });
      console.log(`Category '${categoryName}' created successfully`);
    }

    // Create a fake product and add it to the category
    const fakeProduct = createFakeProduct(categoryName);
    const insertedProduct = await Product.create({
      ...fakeProduct,
      category: category._id, // Pass the ObjectId of the category
    });

    // Ensure that 'products' is initialized as an array
    if (!category.products || !Array.isArray(category.products)) {
      category.products = [];
    }

    category.products.push(insertedProduct);
    await category.save();

    console.log(`Fake product added to category '${categoryName}' successfully`);
  } catch (error) {
    console.error("Error adding fake product:", error);
    throw error;
  }
};

// Route handler to add a fake product to a random category
const addFakeProductToRandomCategory = async (req, res) => {
  try {
    const randomCategoryName = categories[Math.floor(Math.random() * categories.length)];
    await addFakeProductToCategory(randomCategoryName);
    res.status(201).json({ message: 'Fake product added successfully to a random category' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route handler to create a new product and associate it with an existing category
const createNewProduct = async (req, res) => {
  try {
    const { category } = req.body;
    const productName = generateProductName(category);

    const newProduct = await Product.create({
      productName,
      ...req.body,
    });

    const existingCategory = await Category.findOne({ name: category });

    if (existingCategory) {
      existingCategory.products.push(newProduct);
      await existingCategory.save();
      console.log(`New product added to category '${category}' successfully`);
    }

    res.status(201).json({ message: 'New product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route handler to get all products with category information
const getAllProducts = async (req, res) => {
  try {
    const allCategories = await Category.find().populate({
      path: 'products',
      model: 'Product', // Specify the model to populate (should match the model name)
    });

    res.status(200).json({ categories: allCategories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Route handler to clear all products
const clearAllProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.status(200).json({ message: `Deleted ${result.deletedCount} products` });
  } catch (error) {
    console.error('Error clearing products:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addFakeProductToRandomCategory,
  createNewProduct,
  getAllProducts,
  clearAllProducts,
  addFakeProductToCategory,
};
