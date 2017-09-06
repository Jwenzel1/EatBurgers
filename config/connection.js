var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'IAmR00t!',
  database : 'burgers_db'
});

connection.connect();

module.exports = connection;
