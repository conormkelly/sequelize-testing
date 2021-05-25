// Main entry point:
// Connects to the DB, syncs the models, then starts the app.

const logger = require('./lib/logger');

// Sequelize
const db = require('./lib/database');
// Import all models to sync them before we start the app
const requireAll = require('require-all');
const path = require('path');
requireAll(path.resolve(__dirname, './models'));

// Express
const app = require('./app');

/**
 * Top-level async wrapper.
 */
async function start() {
  try {
    // Test connection
    await db.authenticate();
    logger.log('Connection has been established successfully.');

    // Sync the models
    await db.sync();
    logger.log("Synced successfully...");

    app.listen(3000, () => {
        logger.log("Server is listening on port 3000!");
    });

  } catch (err) {
    logger.log(`An error occurred: ${err.message}`);
  }
}

start();
