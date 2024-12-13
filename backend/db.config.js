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
