const sequelize = require("../db/db.config");
const { DataTypes } = require("sequelize"); // DataTypes is class
 
exports.Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: { type: DataTypes.STRING, allowNull: false },
    product_price: { type: DataTypes.FLOAT, allowNull: false },
  },

  {
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
  }
);
