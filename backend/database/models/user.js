'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
    },
    mobile: {
      type: DataTypes.STRING(255),
    },
    departament: {
      type: DataTypes.STRING(255),
    },
    verificationCode: {
      type: DataTypes.STRING(255),
    },
    emailChecked: {
      type: DataTypes.TINYINT,
    },
    cashforceAdm: {
      type: DataTypes.TINYINT,
    },
  }, {
    tableName: 'users',
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })
  return User;
};

module.exports = createUserModel;

