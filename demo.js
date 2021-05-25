// Import logger
const logger = require('./lib/logger');

const { Sequelize } = require('sequelize');

// Instantiate sequelize with postgres URI
const sequelize = new Sequelize(
  'postgres://postgres:secret@localhost:5432/postgres',
  {
    // Use our own Winston logger
    logging: (message) => logger.log(message),
  }
);

/**
 * Top-level async wrapper - used for demo purposes.
 */
async function testConnection() {
  try {
    // Test connection
    await sequelize.authenticate();
    logger.log('Connection has been established successfully.');
  } catch (err) {
    logger.log(`Unable to connect to the database: ${err.message}`);
  }

  // Close the connection
  sequelize.close();
}

testConnection();
