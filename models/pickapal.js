module.exports = function(sequelize, DataTypes) {
  var Pickapal = sequelize.define("Pickapal", {
  zipcode: DataTypes.INTEGER(5),
  name: DataTypes.STRING,
  breed: DataTypes.STRING,
  mix: DataTypes.STRING,
  age: DataTypes.STRING,
  sex: DataTypes.STRING,
  size: DataTypes.STRING,
  opt: DataTypes.STRING,
  opt1: DataTypes.STRING,
  opt2: DataTypes.STRING,
  description: DataTypes.TEXT,
  photo0_id: DataTypes.INTEGER(1),
  photo0_url: DataTypes.TEXT,
  photo1_id: DataTypes.INTEGER(1),
  photo1_url: DataTypes.TEXT,
  photo2_id: DataTypes.INTEGER(1),
  photo2_url: DataTypes.TEXT,
  photo3_id: DataTypes.INTEGER(1),
  photo3_url: DataTypes.TEXT,
  photo4_id: DataTypes.INTEGER(1),
  photo4_url: DataTypes.TEXT,
  photo5_id: DataTypes.INTEGER(1),
  photo5_url: DataTypes.TEXT}

  });
  return Pickapal;
};
