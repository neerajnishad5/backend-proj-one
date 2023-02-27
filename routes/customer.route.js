const express = require("express");
const customerApi = express.Router();
customerApi.use(express.json());

const {
  createCustomer,
  createCustomerOrder,
  createReview, 
  getCustomers,
  getCustomersOrders,
  getCustomerReviews,
  getAllReviews,
  getReviewOfCustomerByFormat,
} = require("../controllers/customer.controller");
 

// post customer

customerApi.post("/customer", createCustomer);

// get all customers

customerApi.get("/customers", getCustomers);

// post customer order

customerApi.post("/customer-order", createCustomerOrder);

// get customerOrders

customerApi.get("/orders/:customer_id", getCustomersOrders);

// customer adding reveiw

customerApi.post("/customer-review", createReview);

// getting all the review by customer in
customerApi.get("/reviews", getAllReviews);

// getting all the reviews by customer id in format

customerApi.get(
  "/reviews/cust-id/:customer_id",
  getReviewOfCustomerByFormat
);

module.exports = customerApi;
