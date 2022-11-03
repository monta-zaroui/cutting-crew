'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      sku: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      width: {
        type: Sequelize.INTEGER
      },
      depth: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      pictureUrl: {
        type: Sequelize.STRING
      },
      materialType: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'MaterialTypes',
          key: 'materialType',
          as: 'materialType',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};