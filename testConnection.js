// testConnection.js
const { pool } = require('./db'); // Adjust the path if necessary

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database!');

    // Execute a simple query to fetch the current database version
    const [rows, fields] = await connection.execute('SELECT VERSION() as version');
    console.log('MySQL Server Version:', rows[0].version);

    // Release the connection
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  } finally {
    // Close the connection pool to avoid keeping idle connections
    await pool.end();
  }
}

// Call the function to test the connection
testConnection();
