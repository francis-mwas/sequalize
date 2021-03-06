'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trips.init({
    tourName: DataTypes.STRING,
    destination: DataTypes.STRING,
    tourType: DataTypes.STRING,
    tourLevel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trips',
  });
  return trips;
};