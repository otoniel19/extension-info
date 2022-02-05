const logger = require("@otoniel19/logger");
const extensions = require("./extensions.json");

/*
 * @param {String} file file to check extension
 */
function get(ext = "") {
  if (!ext.startsWith(".")) {
    logger.error("inform the extension only");
    process.exit();
  }
  if (extensions[ext]) {
    return {
      name: extensions[ext],
      extension: ext
    };
  } else {
    return `${ext} Not Found`;
    process.exit();
  }
}

var list = Object.keys(extensions);

module.exports = { get, list };
