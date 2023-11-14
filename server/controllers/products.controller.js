const {faker } = require('@faker-js/faker');
const Product = require('../models/products.model');

const categories = [
    'Home',
    'Clothing',
    'Lifestyle Outdoors',
    'Pet Products',
    'Personal Care',
    'Essentials',
    'Upcycled and Recycled',
    'Garden'
];

const createFakeProducts = () => {
    const fakeProducts = [];
    for (let i = 0; i < 100; i++) {
        try {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const productName = generateProductName(category);
            const description = faker.commerce.productDescription(category);
            const price = faker.commerce.price(category);

            console.log({ "id": i, productName, price, description, category });

            fakeProducts.push({ "id": i, productName, price, description, category });
        } catch (error) {
            console.error("Error creating fake product:", error);
        }
    }
    console.log(fakeProducts, "hello")
    return fakeProducts;
};



const addFakeProducts = async (req, res) => {
    try {
        const fakeProducts = createFakeProducts();
        const insertedProducts = await Promise.all(fakeProducts.map(product => Product.create(product)));
        res.status(201).json({ message: 'Products added successfully', products: insertedProducts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ products: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json(err)
        });
};

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        console.log('All Products:', allProducts);
        res.status(200).json({ products: allProducts });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    addFakeProducts,
    createNewProduct
};
