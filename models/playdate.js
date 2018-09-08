module.exports = function(sequelize, DataTypes) {
  var playdate = sequelize.define("playdate", {
    humanname: DataTypes.STRING,
    dogname: DataTypes.STRING,
    image: DataTypes.TEXT,
    zipcode: DataTypes.INTEGER(5),
    q0: DataTypes.INTEGER(1),
    q1: DataTypes.INTEGER(1),
    q2: DataTypes.INTEGER(1),
    q3: DataTypes.INTEGER(1),
    q4: DataTypes.INTEGER(1),
    q5: DataTypes.INTEGER(1),
    q6: DataTypes.INTEGER(1)
   });
  return playdate;
};

//added ) at the end of q3
//took away extra } at the bottom should end }); above return and }; below return
