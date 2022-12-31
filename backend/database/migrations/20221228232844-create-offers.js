'use strict';
module.exports = {
  /**
  * @param {import('sequelize').queryInterface} queryInterface 
  * @param {import('sequelize').Sequelize} Sequelize 
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
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
      sponsorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sponsors',
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
    await queryInterface.dropTable('offers');
  }
};