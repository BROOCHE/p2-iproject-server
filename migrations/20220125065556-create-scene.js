"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Scenes", {
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
      summary: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      des: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.STRING,
      },
      img2: {
        type: Sequelize.STRING,
      },
      des2: {
        type: Sequelize.TEXT,
      },
      video2: {
        type: Sequelize.STRING,
      },
      img3: {
        type: Sequelize.STRING,
      },
      des3: {
        type: Sequelize.TEXT,
      },
      video3: {
        type: Sequelize.STRING,
      },
      img4: {
        type: Sequelize.STRING,
      },
      des4: {
        type: Sequelize.TEXT,
      },
      video4: {
        type: Sequelize.STRING,
      },
      BackdropId: {
        type: Sequelize.INTEGER,
        referenses: {
          models: "Backdrop",
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
    await queryInterface.dropTable("Scenes");
  },
};
