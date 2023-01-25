const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Userdrug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userdrug.init({
    userId: DataTypes.INTEGER,
    drugId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Userdrug',
  });
  return Userdrug;
};
