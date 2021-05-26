// Wrapper for PostGres-based sequelize instance.

// Utils
const logger = require('./logger');

// Environment variables
const { POSTGRES_CONNECTION_STRING } = process.env;

const { Sequelize } = require('sequelize');

// Instantiate sequelize with postgres URI
const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {
  // ...using our own Winston logger
  logging: (message) => logger.log(message),
});

module.exports = sequelize;
