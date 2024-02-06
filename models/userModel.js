// models/userModel.js
const { pool } = require('../db');
const bcrypt = require('bcrypt');

class UserModel {
  async createUser({ username, password }) {
    const hashedPassword = await bcrypt.hash(password, 10); // Use bcrypt to hash the password
    await pool.query('INSERT INTO Users (username, password) VALUES (?, ?)', [username, hashedPassword]);
  }

  async getUserByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM Users WHERE username = ?', [username]);
    return rows[0];
  }
}

module.exports = new UserModel();
