'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaterialType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MaterialType.hasMany(models.Article, {
        foreignKey: 'materialType',
      })
    }
  }
  MaterialType.init({
    materialType: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MaterialType',
  });
  return MaterialType;
};