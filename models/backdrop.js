"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Backdrop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Backdrop.belongsTo(models.User);
      Backdrop.hasMany(models.Scene);
    }
  }
  Backdrop.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Title is required" },
          notEmpty: { msg: "Title is required" },
        },
      },
      description: DataTypes.TEXT,
      img: DataTypes.STRING,
      img2: DataTypes.STRING,
      img3: DataTypes.STRING,
      video: DataTypes.STRING,
      video2: DataTypes.STRING,
      video3: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Backdrop",
    }
  );
  return Backdrop;
};
