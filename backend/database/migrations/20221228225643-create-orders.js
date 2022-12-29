'use strict';
module.exports = {
  /**
  * @param {import('sequelize').queryInterface} queryInterface 
  * @param {import('sequelize').Sequelize} Sequelize 
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        type: Sequelize.STRING
      },
      orderFileName: {
        type: Sequelize.STRING
      },
      orderOriginalName: {
        type: Sequelize.STRING
      },
      emissionDate: {
        type: Sequelize.STRING
      },
      pdfFile: {
        type: Sequelize.STRING
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nNf: {
        type: Sequelize.STRING
      },
      CTE: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      deliveryReceipt: {
        type: Sequelize.STRING
      },
      cargoPackingList: {
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        type: Sequelize.STRING
      },
    },
      {
        charset: 'latin1',
        collate: 'latin1_swedish_ci',
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};