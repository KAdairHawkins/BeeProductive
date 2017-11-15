module.exports = function(sequelize, DataTypes) {
  var UserBugs = sequelize.define("UserBugs", {
    bugLabel: DataTypes.STRING,
    bugDescription: DataTypes.STRING,
    timeSpentInMinutes: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    dateCompleted: DataTypes.DATE

  });
  
  UserBugs.associate = function(models) {
    // A UserBug can't be created without a User due to the foreign key constraint
    UserBugs.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });	
  };  
  
  return UserBugs;
};