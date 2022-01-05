const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "project1",
};

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  // let sql = `SELECT * FROM user`;
  // let sql = `SELECT * FROM user ORDER BY ID DESC`;
  let sql = `SELECT * FROM user WHERE ID=?`;
  const list = await connection.queryAsync(sql, [10]);

  console.log(list);

  await connection.endAsync();
};

selectAllUser();
