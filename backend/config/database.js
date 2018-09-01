var mysql = require('promise-mysql');

var db = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'amarengo',
    password: 'amarengo',
    database: 'OneTime',
    timezone: 'utc'
});

module.exports = db;