"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Backdrops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      img: {
        type: Sequelize.STRING,
      },
      img2: {
        type: Sequelize.STRING,
      },
      img3: {
        type: Sequelize.STRING,
      },
      video: {
        type: Sequelize.STRING,
      },
      video2: {
        type: Sequelize.STRING,
      },
      video3: {
        type: Sequelize.STRING,
      },
      UserId: {
        type: Sequelize.INTEGER,
        referenses: {
          models: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Backdrops");
  },
};
