// importing express module
const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const addressApi = express.Router();
addressApi.use(express.json());

// importing all the controllers
const {
  getAddress,
  addAddress,
  getCustomerByAddress,
} = require("../controllers/address.controller");

// imporiting all the controllers methods from controllers

addressApi.get("/address/:customer_id", getAddress);

// adding address to customers

addressApi.post("/address/customer-email/:customer_email/", addAddress);

module.exports = addressApi;
