const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User'); // Your User model

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
});
