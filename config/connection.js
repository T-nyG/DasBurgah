// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
  host: "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xu2r9ux1zkfrhj6r",
  password: "yg9nt4n0pjnoftho",
  database: "iihww5db1f0qqh3v"
  });

// Make connection.
connection.connect(function(err)
{
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
