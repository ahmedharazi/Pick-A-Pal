module.exports = function(sequelize, DataTypes) {
  var breedFinder = sequelize.define("breedFinder", {
    name: DataTypes.STRING,
    has_pet: DataTypes.STRING,
    pet_name: DataTypes.STRING,
    pet_age: DataTypes.STRING,
    pet_size: DataTypes.STRING,
    pet_temperament: DataTypes.STRING,
    owner_zipcode: INTEGER(5)
    }
  });
  return breedFinder;
};
