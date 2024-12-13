const express = require('express');
const { login } = require('../controllers/authController');  // Import the login controller

const router = express.Router();

// Define routes
router.post('/login', login); // Handle login requests

// You can also add other routes like register here in a similar manner.

module.exports = router;
