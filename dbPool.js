const mysql = require('mysql');

const pool  = mysql.createPool(
{
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "sne05swn8p0tokt7",
    password: "hp2jjn2k9sizmpni",
    database: "gpy8nwsrpk0gsax9"
});

module.exports = pool;