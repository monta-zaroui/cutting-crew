'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.MaterialType,{
        foreignKey: 'materialType',
        // default
        // onDelete: 'SET NULL',
        // onUpdate: 'CASCADE',
      })
    }
  }
  Article.init({
    sku: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    width: DataTypes.INTEGER,
    depth: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    pictureUrl: DataTypes.STRING,
    materialType:  DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};