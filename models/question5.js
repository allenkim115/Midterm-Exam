const express = require('express');
const sequelize = require('./db');
const User = require('./models/User');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users); // Send users as the response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server and connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
