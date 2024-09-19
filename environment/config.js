// Constants for default values
const DEFAULT_PORT = 5000;
const DEFAULT_BASE_URL = "http://www.omdbapi.com/";
const DEFAULT_API_KEY = "b8f8ec5a"


class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigError";
  }
}

const config = (() => {
  let instance;

  return (() => {
    if (instance) {
      return instance;
    }

    instance = {
      envVars: process.env,

      // Initialize environment and configurations
      init: function (env = process.env.NODE_ENV || "development") {
        try {
          console.log(`Loading configuration for ${env} environment.`);
          this.envVars = process.env;
        } catch (error) {
          console.error("Error loading environment variables:", error);
        }
      },

      // Method to get environment variable
      get: function (varName, defaultValue = "") {
        try {
          const value = this.envVars[varName];
          if (!value && !defaultValue) {
            throw new ConfigError(
              `Environment variable ${varName} is not defined.`
            );
          }
          return value || defaultValue;
        } catch (error) {
          console.error(
            `Error getting environment variable ${varName}:`,
            error
          );
          return defaultValue;
        }
      },

      getPort: function () {
        return this.get("PORT", DEFAULT_PORT);
      },
      getBaseUrl: function () {
        return this.get("BASE_URL", DEFAULT_BASE_URL);
      },
      getApiKey: function() {
        return this.get("API_KEY", DEFAULT_API_KEY)
      }
    };

    instance.init();
    return instance;
  })();
})();

module.exports = {
  PORT: config.getPort(),
  BASE_URL: config.getBaseUrl(),
  API_KEY: config.getApiKey()
};
