'use strict';
module.exports = {
  /**
  * @param {import('sequelize').queryInterface} queryInterface 
  * @param {import('sequelize').Sequelize} Sequelize 
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
      },
    },
      {
        charset: 'latin1',
        collate: 'latin1_swedish_ci',
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orderportions');
  }
};