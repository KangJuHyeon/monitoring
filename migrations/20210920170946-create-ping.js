'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      region: {
        type: Sequelize.STRING
      },
      ipaddr: {
        type: Sequelize.INTEGER
      },
      addr: {
        type: Sequelize.STRING
      },
      maxrtt: {
        type: Sequelize.INTEGER
      },
      minrtt: {
        type: Sequelize.INTEGER
      },
      avgrtt: {
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pings');
  }
};