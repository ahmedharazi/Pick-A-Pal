module.exports = function(sequelize, DataTypes) {
  var playDate = sequelize.define("playDate", {
    name: DataTypes.STRING,
    has_pet: DataTypes.STRING,
    pet_name: DataTypes.STRING,
    pet_age: DataTypes.STRING,
    pet_size: DataTypes.STRING,
    pet_temperament: DataTypes.STRING,
    owner_zipcode: DataTypes.INTEGER(5)
  });
  return playDate;
};
