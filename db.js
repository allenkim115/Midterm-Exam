// db.js

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
