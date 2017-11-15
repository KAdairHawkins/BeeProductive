
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
  //Prevents Sequelize from breaking when it tries to pull a "time created" column and can't find one.
  {timestamps: false}
  );
  
 return User;
};