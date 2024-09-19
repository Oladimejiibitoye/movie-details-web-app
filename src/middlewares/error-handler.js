const {StatusCodes} = require("http-status-codes")
const appLogger = require("../logger");

const errorHandler = (err, req, res, next) => {
      appLogger.error(err.message, err.stack);
      res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR);
      res.render('error', { 
          message: err.message, 
          status: err.status || StatusCodes.INTERNAL_SERVER_ERROR
      });
};

module.exports.errorHandler = errorHandler;
