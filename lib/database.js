// Wrapper for PostGres-based sequelize instance.

// Utils
const logger = require('./logger');

const { Sequelize } = require('sequelize');

// Instantiate sequelize with postgres URI
const sequelize = new Sequelize(
  'postgres://postgres:secret@localhost:5432/postgres',
  {
    // Use our own Winston logger
    logging: (message) => logger.log(message),
  }
);

module.exports = sequelize;
