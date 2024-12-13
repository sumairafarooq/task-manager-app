const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');  // Import the auth routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);  // Set up authentication routes

// Connect to MongoDB (adjust the URI based on your environment)
// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));
// Import the 'pg' module
const { Client } = require('pg');

// Create a new client instance with connection parameters
const client = new Client({
  user: 'postgres', // Database username
  host: 'localhost', // Database host
  database: 'Task-Manager', // Database name
  password: 'Postgres@123', // Database password
  port: 5432, // Default PostgreSQL port
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Connection error', err.stack);
  });

// Perform queries (for example, SELECT)
client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log(res.rows);
  }

  // Close the connection
  client.end();
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
