const ProductController = require("../controllers/products.controller");

module.exports = (app) => {
  // Use app.get() for getting all products
  app.get('/api/getAllProducts', ProductController.getAllProducts);

  //Use app.get() for getting a category and all of its products
  app.get('/api/category/:categoryName', ProductController.getOneCategory);

  // Use app.post() for adding fake products to a random category
  app.post("/api/addFakeProductToRandomCategory", ProductController.addFakeProductToRandomCategory);

  // Use app.post() for creating a new product
  app.post("/api/createNewProduct", ProductController.createNewProduct);

  // Route to clear all products
  app.delete('/api/clearAllProducts', ProductController.clearAllProducts);
};
