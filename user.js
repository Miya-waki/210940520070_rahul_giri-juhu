const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "Wpt_test",
};

async function checkConnection() {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("Connection is done for now");
  await Connection.endAsync();
}

async function adduser(user) {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("Connection is done for now");
  const sql = `insert into user values(?,?,?,?);`;
  await Connection.queryAsync(sql, [
    user.id,
    user.name,
    user.feedback,
    user.number,
  ]);
  await Connection.endAsync();
}

const data1 = {
  id: 1,
  name: "rahul",
  feedback: "module was nice",
  number: "7579107000",
};
const data2 = {
  id: 2,
  name: "Radhesham",
  feedback: "module was great",
  number: "7579105400",
};
const data3 = {
    id: 1,
    name: "pratik",
    feedback: "module was very good",
    number: "7579107000",
  };
const selectAlluser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("sucessfully done");
  const sql = `select*from user;`;
  const list = await connection.queryAsync(sql, []);
  console.log(list);
  await connection.endAsync();
  return list;
};

//adduser(data1);
//adduser(data2);
//adduser(data3);


module.exports = { selectAlluser, adduser };
