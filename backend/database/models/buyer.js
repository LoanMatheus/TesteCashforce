'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createBuyerModel = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('buyers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    tradingName: {
      type: DataTypes.STRING(255),
    },
    cashforceTax: {
      type: DataTypes.STRING(255),
    },
    responsibleName: {
      type: DataTypes.STRING(255),
    },
    responsibleEmail: {
      type: DataTypes.STRING(255),
    },
    responsiblePosition: {
      type: DataTypes.STRING(255),
    },
    responsiblePhone: {
      type: DataTypes.STRING(255),
    },
    responsibleMobile: {
      type: DataTypes.STRING(255),
    },
    website: {
      type: DataTypes.STRING(255),
    },
    postalCode: {
      type: DataTypes.STRING(255),
    },
    address: {
      type: DataTypes.STRING(255),
    },
    number: {
      type: DataTypes.STRING(255),
    },
    complement: {
      type: DataTypes.STRING(255),
    },
    neighborhood: {
      type: DataTypes.STRING(255),
    },
    city: {
      type: DataTypes.STRING(255),
    },
    state: {
      type: DataTypes.STRING(255),
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
    },
    situation: {
      type: DataTypes.STRING(255),
    },
    situationDate: {
      type: DataTypes.STRING(255),
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cnpjs',
        key: 'id',
      },
    },
    confirm: {
      type: DataTypes.TINYINT,
    },
    email: {
      type: DataTypes.STRING(255),
    },
  },
    {
      tableName: 'buyers',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    })

  return Buyer;
};

module.exports = createBuyerModel;