let connection = require("../db/db.config");
const expressAsyncHandler = require("express-async-handler");

// importing models
const { Customer } = require("../models/customer.model");
const { Review } = require("../models/review.model");
const { Product } = require("../models/product.model");
const { Order } = require("../models/order.model");

// establishing association

// customer can buy multiple products and write one review for each prod
Customer.belongsToMany(Product, {
  through: Review,
  foreignKey: "customer_id",
  timestamps: false,
});

// products can have multiple buyers and one review by each customer
Product.belongsToMany(Customer, {
  through: Review,
  foreignKey: "product_id",
  timestamps: false,
});


// customer can have multiple orders

// creating a customer route
const createCustomer = expressAsyncHandler(async (req, res) => {
  const cust = req.body;
  await Customer.create(cust);
  console.log(cust);
  res.send({ msg: "Customer created!" });
});

// creating customer review route
const createCustomerReview = expressAsyncHandler(async (req, res) => {});

// customer placing order route
const createCustomerOrder = expressAsyncHandler(async (req, res) => {});

// getting all the customer routes
const getCustomers = expressAsyncHandler(async (req, res) => {
  let customers = await Customer.findAll();
  res.send({ msg: "All customers!", payload: customers });
});

// get all the customer orders by cusotmer id

const getCustomersOrders = expressAsyncHandler(async (req, res) => {});

// get customer reivews
const getCustomerReviews = expressAsyncHandler(async (req, res) => {});

// customer writing review
const createReview = expressAsyncHandler(async (req, res) => {
  let customerReview = req.body;
  await Review.create(customerReview);
  console.log(customerReview);
  res.send({ msg: "Review added!", payload: customerReview });
});

// get all the reviews

const getAllReviews = expressAsyncHandler(async (req, res) => {
  const reviews = await Review.findAll();
  res.send({ msg: "All reviews!", payload: reviews });
});

// get customer reviews in a format

const getReviewOfCustomerByFormat = expressAsyncHandler(async (req, res) => {
  const id = req.params.customer_id;
  const reviews = await Review.findAll({ where: { customer_id: id } });
  res.status(200).send({ customer_id: id, review: reviews });
});


module.exports = {
  createCustomer,
  createCustomerReview,
  createCustomerOrder,
  getCustomers,
  getCustomersOrders, 
  getAllReviews,
  getReviewOfCustomerByFormat,
  createReview,
  getCustomerReviews,
};
