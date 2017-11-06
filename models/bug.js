module.exports = function(sequelize, DataTypes) {
  var Bug = sequelize.define("Bug", {
    BugName: DataTypes.STRING,
    BugWorth: DataTypes.INTEGER,
    BugRarity: DataTypes.INTEGER,
    DateCreated: DataTypes.DATE
  });

  return Bug;
};
