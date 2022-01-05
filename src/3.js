const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "project1",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
let sql = `INSERT INTO user (username, password) values ("rahul", "rohitkapadfasfsa")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();
