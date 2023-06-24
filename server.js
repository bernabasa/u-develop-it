const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
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

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
