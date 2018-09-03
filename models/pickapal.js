module.exports = function(sequelize, DataTypes) {
  var Pickapal = sequelize.define("Pickapal", {
    name: DataTypes.STRING,
      image: DataTypes.STRING,
      q0: DataTypes.STRING,
      q1: DataTypes.STRING,
      q2: DataTypes.STRING,
      q3: DataTypes.STRING,
      q4: DataTypes.STRING,
      q5: DataTypes.STRING,
      q6: DataTypes.STRING,
  });
  return Pickapal;
};


// module.exports = function(sequelize, DataTypes) {
//   var Friend = sequelize.define("Friend", {
//       name: DataTypes.STRING,
//       image: DataTypes.STRING,
//       q0: DataTypes.STRING,
//       q1: DataTypes.STRING,
//       q2: DataTypes.STRING,
//       q3: DataTypes.STRING,
//       q4: DataTypes.STRING,
//       q5: DataTypes.STRING,
//       q6: DataTypes.STRING,
//       q7: DataTypes.STRING,
//       q8: DataTypes.STRING,
//       q9: DataTypes.STRING
//   });

//   return Friend;
// };