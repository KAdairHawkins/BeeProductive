module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userName: DataTypes.STRING,
    bug1Count: DataTypes.INTEGER,
    bug2Count: DataTypes.INTEGER,
    bug3Count: DataTypes.INTEGER,
    bug4Count: DataTypes.INTEGER,
    profile: DataTypes.TEXT,
    //amount of BugBucks on hand
    wallet: DataTypes.INTEGER,
    bugsCaught: DataTypes.INTEGER,
    defineateCreated: DataTypes.DATE
  });

  return Users;
};
