module.exports = function(sequelize, DataTypes) {
var Bugs = sequelize.define("Bugs", {
    bugName: DataTypes.STRING,
    bugWorth: DataTypes.INTEGER,
    bugImage: DataTypes.STRING,
    dateCreated: DataTypes.DATE
  },
  //Prevents Sequelize from breaking when it tries to pull a "time created" column and can't find one
{timestamps: false});  

  Bugs.associate = function(models) {
    // Associating User with UserBugs
    // When an User is deleted, also delete any associated UserBugs
    Bugs.hasMany(models.UserBugs, {
      onDelete: "cascade"
    });
  };
  return Bugs;
};
  