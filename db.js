// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'paitent', // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  pool,
};
