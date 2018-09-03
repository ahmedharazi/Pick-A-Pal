module.exports = function(sequelize, DataTypes) {
  var breedFinder = sequelize.define("breedFinder", {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    q0: DataTypes.INTEGER(1),
    q1: DataTypes.INTEGER(1),
    q2: DataTypes.INTEGER(1),
    q3: DataTypes.INTEGER(1,
    q4: DataTypes.INTEGER(1),
    q5: DataTypes.INTEGER(1),
    q6: DataTypes.INTEGER(1)
   }

  });
  return breedFinder;
};
