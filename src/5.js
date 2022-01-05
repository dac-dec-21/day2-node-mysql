const mysql = require("mysql");
const procss = require("process");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "project1",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY :: READING THE VLAUE FROM COMMAND LINE USING ARGUMENT
const user = { username: procss.argv[2], password: procss.argv[3] };
let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();
