const winston = require("winston");

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.colorize()
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.colorize(),
            winston.format.align(),
            winston.format.printf((info) => {
              let msg = `${info.timestamp}`;
              msg = `${msg}: ${info.level}`;
              msg = `${msg}: ${info.message.trim()}`;
              return msg;
            }),
          ),
        }),
      ],
    });

  }

  log(level, message, obj = null) {
    if (obj) {
      if (obj instanceof Error) {
        const errorInfo = {
          message: obj.message,
          stack: obj.stack,
        };
        message += ": " + JSON.stringify(errorInfo, null, 2);
      } else {
        message += ": " + JSON.stringify(obj, null, 2);
      }
    }
    this.logger.log(level, message);
  }

  info(message, obj = null) {
    this.log("info", message, obj);
  }

  warn(message, obj = null) {
    this.log("warn", message, obj);
  }

  error(message, obj = null) {
    this.log("error", message, obj);
  }

  debug(message, obj = null) {
    this.log("debug", message, obj);
  }
}

const logger = new Logger();


module.exports = logger;
