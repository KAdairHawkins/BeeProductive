module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    profile: DataTypes.TEXT,
    //amount of BugBucks on hand
    wallet: DataTypes.INTEGER,
    bugsCaught: DataTypes.INTEGER
  });

  return User;
};
