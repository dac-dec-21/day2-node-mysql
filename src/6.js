const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "project1",
};

const addUser = (user) => {
  const connection = mysql.createConnection(dbinfo);
  connection.connect();

  let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
  connection.query(sql);

  connection.end();
};

// CALLING THE METHOD
const user = { username: "ABCD", password: "asdfadfasf" };
addUser(user);
// addUser({ ...user, username: "pqrs" });
