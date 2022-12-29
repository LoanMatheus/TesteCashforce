'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createOrderModel = (sequelize, DataTypes) => {
  const Order = sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    orderNumber: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    orderPath: {
      type: DataTypes.STRING(255),
    },
    orderFileName: {
      type: DataTypes.STRING(255),
    },
    orderOriginalName: {
      type: DataTypes.STRING(255),
    },
    emissionDate: {
      type: DataTypes.STRING(255),
    },
    pdfFile: {
      type: DataTypes.STRING(255),
    },
    emitedTo: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    nNf: {
      type: DataTypes.STRING(255),
    },
    CTE: {
      type: DataTypes.STRING(255),
    },
    value: {
      type: DataTypes.STRING(255),
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cnpjs',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    buyerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'buyers',
        key: 'id',
      },
    },
    providerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'providers',
        key: 'id',
      },
    },
    orderStatusBuyer: {
      type: DataTypes.STRING(255),
    },
    orderStatusProvider: {
      type: DataTypes.STRING(255),
    },
    deliveryReceipt: {
      type: DataTypes.STRING(255),
    },
    cargoPackingList: {
      type: DataTypes.STRING(255),
    },
    deliveryCtrc: {
      type: DataTypes.STRING(255),
    },
  }, {
    tableName: 'orders',
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })

  Order.associate = (models) => {
    Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpjId' });
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'userId' });
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyerId' });
    Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'providerId' });
    Order.hasMany(models.OrderPortion, { foreignKey: 'orderId', as: 'orderId' });
  };

  return Order;
};

export default createOrderModel;