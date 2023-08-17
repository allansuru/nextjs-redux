const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@core"] = path.join(__dirname, "core");

    return config;
  },
};
