const express = require("express"); 
const productApi = express.Router(); 

const {
  createProduct,
  getProducts,
} = require("../controllers/product.controller");

productApi.get("/product", getProducts);
productApi.post("/product", createProduct);

module.exports = productApi;
