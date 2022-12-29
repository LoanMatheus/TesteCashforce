'use strict';
module.exports = {
  /**
  * @param {import('sequelize').queryInterface} queryInterface 
  * @param {import('sequelize').Sequelize} Sequelize 
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      departament: {
        type: Sequelize.STRING
      },
      verificationCode: {
        type: Sequelize.STRING
      },
      emailChecked: {
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
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
      },
    },
      {
        charset: 'latin1',
        collate: 'latin1_swedish_ci',
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};