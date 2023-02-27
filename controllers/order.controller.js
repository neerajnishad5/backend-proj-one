// get all the orders

let connection = require("../db/db.config");
const expressAsyncHandler = require("express-async-handler");

// importing models
const { Customer } = require("../models/customer.model");
const { Product } = require("../models/product.model");
const { Order } = require("../models/order.model");
const sequelize = require("../db/db.config");

// customer can do multiple orders - orders junction table

Customer.belongsToMany(Product, {
  through: Order,
  foreignKey: "customer_id",
  timestamps: false,
});

// product can be ordered by multiple customers
Product.belongsToMany(Customer, {
  through: Order,
  foreignKey: "product_id",
  timestamps: false,
});

// get all the orders by a particular customer
const getAllOrders = expressAsyncHandler(async (req, res) => {
  const id = req.params.order_id;
  console.log(id);
  const orders = await Order.findAll({
    where: {
      customer_id: id,
    },
  });
  res.send({ msg: "All orders!", payload: orders });
});

const createOrder = expressAsyncHandler(async (req, res) => {
  const order = req.body;
  await Order.create(order);
  res.send({ msg: "Order created!", payload: order });
});

const dummy = expressAsyncHandler(async (req, res) => {
  res.send("hello");
});

sequelize.sync({ force: true });

module.exports = {
  getAllOrders,
  createOrder,
  dummy,
};
