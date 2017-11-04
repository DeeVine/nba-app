// Setting up connection to mySQL
// Dependencies
var Sequelize = require("sequelize");

var mysqlUser = {
  "database": "NBA_Stats",
  "username": "root",
  "password": "0038ratdog"
}

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(mysqlUser.database, mysqlUser.username, mysqlUser.password, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;