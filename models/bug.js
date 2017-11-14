
module.exports = function(sequelize, DataTypes) {
var Bugs = sequelize.define("Bugs", {
    bugName: DataTypes.STRING,
    bugWorth: DataTypes.INTEGER,
    bugImage: DataTypes.STRING,
    dateCreated: DataTypes.DATE
  });
  return Bugs;
};
  


