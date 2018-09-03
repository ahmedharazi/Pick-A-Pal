module.exports = function(sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Pets;
};

