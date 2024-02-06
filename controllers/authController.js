// controllers/authController.js
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
  async registerUser(req, res) {
    try {
      const { username, password } = req.body;
      await userModel.createUser({ username, password });
      res.status(201).send('User registered successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  async loginUser(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userModel.getUserByUsername(username);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).send('Invalid credentials');
        return;
      }

      const token = jwt.sign({ userId: user.id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new AuthController();
