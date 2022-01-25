"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Scene.belongsTo(models.Backdrop);
    }
  }
  Scene.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Title is required" },
          notEmpty: { msg: "Title is required" },
        },
      },
      summary: DataTypes.STRING,
      img: DataTypes.STRING,
      des: DataTypes.TEXT,
      video: DataTypes.STRING,
      img2: DataTypes.STRING,
      des2: DataTypes.TEXT,
      video2: DataTypes.STRING,
      img3: DataTypes.STRING,
      des3: DataTypes.TEXT,
      video3: DataTypes.STRING,
      img4: DataTypes.STRING,
      des4: DataTypes.TEXT,
      video4: DataTypes.STRING,
      BackdropId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Scene",
    }
  );
  return Scene;
};
