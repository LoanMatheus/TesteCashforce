'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createCnpjModel = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('cnpjs', {
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
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })
  return Cnpj;
};

module.exports = createCnpjModel;