const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.config");

exports.Review = sequelize.define(
  "review",
  {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    review_desc: {
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
