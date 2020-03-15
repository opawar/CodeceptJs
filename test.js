const logger = require("./logger");
const assert = require("assert");

function logFunc() {
    logger.info("hello world");
    assert.equal('true', 'true', "assert message");
}

// logFunc();

module.exports.func = function() {
    logger.info(`hello world`);
}