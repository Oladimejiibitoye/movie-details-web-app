const app = require("./app");
const { PORT } = require("../environment/config");
const appLogger = require("./logger");

// Set port from environment
const port = PORT;

// Function to start the server and connect to the database
const start = async () => {
  try {
    app.listen(port, () => {
      appLogger.info(`Server is running on PORT: ${port}`);
    });
  } catch (err) {
    appLogger.info(`Failed to start the server: ${err}`);
  }
};

// Start the server
start();
