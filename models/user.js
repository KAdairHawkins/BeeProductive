module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserName: DataTypes.STRING,
    HasBug1: DataTypes.BOOLEAN,
    HasBug2: DataTypes.BOOLEAN,
    HasBug3: DataTypes.BOOLEAN,
    HasBug4: DataTypes.BOOLEAN,
    profile: DataTypes.TEXT,
    //amount of BugBucks on hand
    wallet: DataTypes.INTEGER,
    bugsCaught: DataTypes.INTEGER,
    DateCreated: DataTypes.DATE
  });

  return User;
};
