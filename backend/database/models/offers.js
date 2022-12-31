'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createOfferModel = (sequelize, DataTypes) => {
  const Offer = sequelize.define('offers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tax: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    tariff: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    adValorem: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    float: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    iof: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    expiresIn: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    paymentStatusSponsor: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    paymentStatusProvider: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'id',
      },
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sponsors',
        key: 'id',
      },
    },
  }, {
    tableName: 'offers',
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })
  return Offer;
};

module.exports = createOfferModel;