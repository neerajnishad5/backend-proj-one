const sequelize = require("../db/db.config");
const { DataTypes } = require("sequelize"); // DataTypes is class


exports.Customer = sequelize.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_name: { type: DataTypes.STRING, allowNull: false },
    customer_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
  }
);
