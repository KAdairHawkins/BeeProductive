 // Import the ORM to implement functions that will interact with the database
var db = require('../models');

// Create the burger object
var bugs = {
  // Select all bugs for a specific user from the UserBugs table
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = bugs;

module.exports = function(sequelize, DataTypes) {
    var UserBug = sequelize.define("UserBug", {
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        BugLabel: {
            type: DataTypes.STRING,
       },
        BugDescription: {
            type: DataTypes.STRING,
        },
        TimeSpentInMinutes: {
            type: DataTypes.INTEGER,
        }
    }, {
        paranoid: true,
        tableName: "BeeProductive",
        classMethods: {
            associate: function(models) {
                Burger.belongsTo(models.Customer);
            }
        }
    });
    return Burger;
};