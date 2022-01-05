const mysql = require("mysql");

const dbinfo = {
  host: "localhostt",
  user: "root",
  password: "mysql",
  database: "project1",
};

const checkConnection = () => {
  const connection = mysql.createConnection(dbinfo);

  // ASYNC
  connection.connect();

  console.log("CONNECTION SUCCESS");

  // ASYNC
  connection.end();
};

checkConnection();
