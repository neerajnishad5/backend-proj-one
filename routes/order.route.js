
// importing express module
const express = require("express"); 
const orderApi = express.Router();
orderApi.use(express.json());


// importing all the controllers methods from controllers
const { 
  dummy,
} = require("../controllers/product.controller");

// route to get all the orders 

orderApi.get("/dummy", dummy);


//exporting all the methods
module.exports = orderApi;
