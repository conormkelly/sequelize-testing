// Basic Winston console logger.

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'debug',
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.Console()],
});

// Used by sequelize instance for logging,
// shows different log levels for demo purposes.
const log = (message) => {
  // All SQL statements generated by sequelize will show as "debug" logs:
  if (message.includes('Executing (default)')) {
    logger.debug(message);
  } else if (message.toLowerCase().includes('error')) {
    logger.error(message);
  } else {
    logger.info(message);
  }
};

module.exports = { log };
