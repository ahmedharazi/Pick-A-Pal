module.exports = function(sequelize, DataTypes) {
  var Pickapal = sequelize.define("Pickapal", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Pickapal;
};
