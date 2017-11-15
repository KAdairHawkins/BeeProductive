//I am fairly sure that this file isn't actually called anywhere.
//But just in case, this is gonna sit there.
var mysql = require("mysql");
var MySQLPassword;
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    Password = require("../keys.js");
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: Password.MySQLPassword,
    database: "beeProductive"
    });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
