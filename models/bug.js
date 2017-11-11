module.exports = function(sequelize, DataTypes) {
  var Bug = sequelize.define("Bug", {
    BugName: DataTypes.STRING,
    BugWorth: DataTypes.INTEGER,
    DateCreated: DataTypes.DATE,
    BugImage: DataTypes.STRING
  },
    {timestamps: false}
    );

  return Bug;
};
