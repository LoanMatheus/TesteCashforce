'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createOrderPortionModel = (sequelize, DataTypes) => {
  const OrderPortion = sequelize.define('orderportions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nDup: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    dVenc: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    vDup: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    availableToMarket: {
      type: DataTypes.TINYINT,
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'id',
      },
    },
  }, {
    tableName: 'orderportions',
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })

  Order.associate = (models) => {
    Order.belongsTo(models.Order, { foreignKey: 'orderId', as: 'orderId' });
  };

  return OrderPortion;
};

export default createOrderPortionModel;