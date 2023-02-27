let connection = require("../db/db.config");
const expressAsyncHandler = require("express-async-handler");

// importing models
const { Customer } = require("../models/customer.model");
const { Address } = require("../models/address.model");

// creating associations

Customer.hasOne(Address, {
  foreignKey: "customer_id",
  timestamps: false,
});
Address.belongsTo(Customer, {
  foreignKey: "customer_id",
  timestamps: false,
});

// get address by customer id
const getAddress = expressAsyncHandler(async (req, res) => {
  res.send("hello");
});

// get customer by address id/ address
const getCustomerByAddress = expressAsyncHandler(async (req, res) => {
  res.send("hello");
});

// create address for present customer
const createAddress = expressAsyncHandler(async (req, res) => {
  res.send("hello");
});

// create customer if customer address not present

const createCustomerIfAddressNotPresent = expressAsyncHandler(
  async (req, res) => {
    res.send("hello");
  }
);

const addAddress = expressAsyncHandler(async (req, res) => {
  const email = req.params.customer_email;
  console.log(email); 
  const address = req.body.address;
  const found = await Customer.findAll({
    where: {
      customer_email: email,
    }, 
  }); 
  if (found != null) {
    let insert = await Customer.setCustomeraddress(address);
    res.send({ msg: "Address added to customer!", payload: insert });
  } else {
    let newCustomer = req.body;
    await Customer.create(newCustomer);
    res.send({ msg: "New customer added!", payload: newCustomer });
  }
});

module.exports = {
  getAddress,
  getCustomerByAddress,
  addAddress,
  createAddress,
  createCustomerIfAddressNotPresent,
};
