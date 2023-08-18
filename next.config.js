const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@core"] = path.join(__dirname, "core");
    config.resolve.alias["@module"] = path.join(__dirname, "module");

    return config;
  },
};
