let connection = require("../db/db.config");
const expressAsyncHandler = require("express-async-handler");
const { Product } = require("../models/product.model");
const { Review } = require("../models/review.model");


// making association
// Product.belongsToMany(Review, {
//   through: Review, 
//   foreignKey: "product_id",
//   timestamps: false,
// });

// create product route
const createProduct = expressAsyncHandler(async (req, res) => {
  let product = req.body;
  await Product.create(product);
  console.log(product);
  res.send({ msg: "Product created!" });
});


// getting all products route
const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.findAll();
  res.send({ msg: "All products!", payload: products });
});




// exporting all routes

module.exports = {
  createProduct,
  getProducts,
};
