// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

// Sync the model with the database (creates the table if it doesn't exist)
User.sync();

module.exports = User;
s