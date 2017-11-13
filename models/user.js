
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    bug1Count: DataTypes.INTEGER,
    bug2Count: DataTypes.INTEGER,
    bug3Count: DataTypes.INTEGER,
    bug4Count: DataTypes.INTEGER,
    profile: DataTypes.TEXT,
    //amount of BugBucks on hand
    wallet: DataTypes.INTEGER,
    bugsCaught: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE
  },
  {timestamps: false}
  );
  
 return User;
};