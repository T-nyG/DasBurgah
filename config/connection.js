// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
  host: "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "m0ne5sp978ttahpa",
  password: "ivkwflmgzngbxzy4",
  database: "gj1df32ew8x4yr3u"
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
