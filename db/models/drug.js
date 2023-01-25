const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, { through: 'Userdrugs', foreignKey: 'userId' });
    }
  }
  Drug.init({
    img: DataTypes.TEXT,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};
