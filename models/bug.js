module.exports = function(sequelize, DataTypes) {
var Bugs = sequelize.define("Bugs", {
    bugName: DataTypes.STRING,
    bugWorth: DataTypes.INTEGER,
    bugImage: DataTypes.STRING,
    dateCreated: DataTypes.DATE
  });
  
  Bugs.associate = function(models) {
    // Associating User with UserBugs
    // When an User is deleted, also delete any associated UserBugs
    Bugs.hasMany(models.UserBugs, {
      onDelete: "cascade"
    });
  };
  return Bugs;
};
  