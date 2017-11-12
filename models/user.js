module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserName: DataTypes.STRING,
    Bug1Count: DataTypes.INTEGER,
    Bug2Count: DataTypes.INTEGER,
    Bug3Count: DataTypes.INTEGER,
    Bug4Count: DataTypes.INTEGER,
    profile: DataTypes.TEXT,
    //amount of BugBucks on hand
    wallet: DataTypes.INTEGER,
    bugsCaught: DataTypes.INTEGER,
    DateCreated: DataTypes.DATE
  },
  {timestamps: false}
  );

  return User;
};
