module.exports = function(sequelize, DataTypes) {
  var UserBugs = sequelize.define("UserBugs", {
    UserID: DataTypes.INTEGER,
    BugLabel: DataTypes.STRING,
    BugDescription: DataTypes.STRING,
    TimeSpentInMinutes: DataTypes.INTEGER,
    DateCreated: DataTypes.DATE
  });

  return UserBugs;
};
