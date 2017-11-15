
module.exports = function(sequelize, DataTypes) {
  var UserBugs = sequelize.define("UserBugs", {
    userID: DataTypes.INTEGER,
    bugLabel: DataTypes.STRING,
    bugDescription: DataTypes.STRING,
    timeSpentInMinutes: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    dateCompleted: DataTypes.DATE
  },
  //Prevents Sequelize from breaking when it tries to pull a "time created" column and can't find one.
  {timestamps: false});

  return UserBugs;
};
