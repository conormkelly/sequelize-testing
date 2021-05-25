// Basic Winston console logger.

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.simple()
  ),
  transports: [new transports.Console()],
});

// Used by sequelize instance for logging.
const log = (message) => {
  logger.log('info', message);
};

module.exports = { log };
