const ProductController = require("../controllers/products.controller");

module.exports = (app) => {
  // Use POST instead of GET for adding fake products
  app.get('/api/getAllProducts', ProductController.getAllProducts);
  app.post("/api/addFakeProducts", ProductController.addFakeProducts);
  app.post("/api/createNewProduct", ProductController.createNewProduct)
};




