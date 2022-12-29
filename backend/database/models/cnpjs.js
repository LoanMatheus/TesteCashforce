'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createCnpjModel = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpjs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING(255),
    },
    companyType: {
      type: DataTypes.STRING(255),
    },
  }, {
    tableName: 'cnpjs',
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Order, { foreignKey: 'cnpjId', as: 'cnpjId' });
    Cnpj.hasMany(models.Provider, { foreignKey: 'cnpjId', as: 'cnpjId' });
    Cnpj.hasMany(models.Sponsor, { foreignKey: 'cnpjId', as: 'cnpjId' });
    Cnpj.hasMany(models.Buyer, { foreignKey: 'cnpjId', as: 'cnpjId' });
  };

  return Cnpj;
};

export default createCnpjModel;