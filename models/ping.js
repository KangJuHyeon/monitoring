'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ping.init({
    region: DataTypes.STRING,
    ipaddr: DataTypes.INTEGER,
    addr: DataTypes.STRING,
    maxrtt: DataTypes.INTEGER,
    minrtt: DataTypes.INTEGER,
    avgrtt: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ping',
  });
  return ping;
};