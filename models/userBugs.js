
module.exports = function(sequelize, DataTypes) {
  var UserBugs = sequelize.define("UserBugs", {
    userID: DataTypes.INTEGER,
    bugLabel: DataTypes.STRING,
    bugDescription: DataTypes.STRING,
    timeSpentInMinutes: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    dateCompleted: DataTypes.DATE

  });

  return UserBugs;
};
