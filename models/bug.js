module.exports = function(sequelize, DataTypes) {
  var Bug = sequelize.define("Bug", {
    bugName: DataTypes.STRING,
    bugWorth: DataTypes.INTEGER,
    bugImage: DataTypes.STRING,
    dateCreated: DataTypes.DATE
  });

  return Bug;
};
