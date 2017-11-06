module.exports = function(sequelize, DataTypes) {
  var Bug = sequelize.define("Bug", {
    name: DataTypes.STRING,
    //Provided by the user
    foundAtDescription: DataTypes.TEXT,
    //The moment that the bug was discovered
    foundAtTime: DataTypes.DATE,
    //the cost of the bug
    value: DataTypes.INTEGER,
    //how long it took the user to find the bug
    timeToFind: DataTypes.FLOAT,
  });

  return Bug;
};
