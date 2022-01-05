const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhostt",
  user: "root",
  password: "mysql",
  database: "project1",
};

const checkConnection = async () => {
  const connection = mysql.createConnection(dbinfo);

  // ASYNC
  await connection.connectAsync();

  // ...
  console.log("CONNECTION SUCCESS");

  // ASYNC
  await connection.endAsync();
};

checkConnection();
