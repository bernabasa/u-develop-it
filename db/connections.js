
const mysql = require('mysql2');




//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your Mysql username,
        user: 'root',
        //Your Mysql password
        password: 'Workhappy2023$',
        database: 'election2'
    },
    console.log('Connected to the election databse')
);

module.exports = db;