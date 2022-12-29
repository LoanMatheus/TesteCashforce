'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
      type: DataTypes.TINYINT(1),
    },
    cashforceAdm: {
      type: DataTypes.TINYINT(1),
    },
  }, {
    tableName: 'users',
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })
  return User;
};

export default createUserModel;
