'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
*/
const createSponsorsModel = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('sponsors', {
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
    bank: {
      type: DataTypes.STRING(255),
    },
    bankAgency: {
      type: DataTypes.STRING(255),
    },
    account: {
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
    email: {
      type: DataTypes.STRING(255),
    },
  }, {
    tableName: 'sponsors',
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  })

  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpjId' });
    Sponsor.hasMany(models.Offer, { foreignKey: 'sponsorId', as: 'sponsorId' });
  };

  return Sponsor;
};

export default createSponsorsModel;