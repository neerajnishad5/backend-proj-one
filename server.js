// create express app
const express = require("express");
const app = express();
const expressAsyncHandler = require("express-async-handler");


// configure dotenv
require("dotenv").config();
const sequelize = require("../db/db.config");

// using body parser
app.use(express.json());
const PORT = 4000 || process.env.PORT;


// importing models
const { Customer } = require("./models/customer.model");
const { Product } = require("./models/product.model");
const { Review } = require("./models/review.model");

const {Address} = require("./models/address.model");

// checking db connection
sequelize
  .authenticate()
  .then(() => console.log("DB connection success"))
  .catch((err) => console.log(err));


// CUSTOMER API

const customerApi = require("./routes/customer.route");
app.use("/customer-api", customerApi);

// PRODUCT API
const productApi = require("./routes/product.route");
app.use("/product-api", productApi);

// REVIEW API
const reviewApi = require("./routes/customer.route");
app.use("/review-api", reviewApi);

// ORDER API
// const orderApi = require("./routes/order.route");
// app.use("/order-api", orderApi); 

// ADDRESS API
const addressApi = require("./routes/address.route");
app.use("/address-api", addressApi);

// CATCHING ERROR
app.use((err, req, res, next) => {
  res.send({ errMsg: err.errMsg });
});

// WRONG PATH middleware

app.use("*", (req, res, next) => {
  res.send({ Message: "Wrong path!" });
});


// 
app.listen(PORT, console.log("Server running at 4000!"));
