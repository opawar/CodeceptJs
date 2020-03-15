const log4js = require("log4js");

const {traceLogConfig} = require("./log4jsproperties").log4js;

log4js.configure(traceLogConfig);

let logger = log4js.getLogger();

logger.addContext("user", "mdc");

module.exports = logger;