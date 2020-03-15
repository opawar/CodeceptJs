const logger = require("./logger");
// const codeceptjs = require("codeceptjs");
const testjs = require("./test");

Feature('Testing1');

Scenario('test11111 @tag123', (I) => {
    I.amOnPage("https://www.google.com");
    logger.info("inside scenario11111");
    I.wait(1);
    // I.waitForClickable("");
    // testjs.func();
    I.wait(1);
    // throw new Error("hi");
    // logger.info(`------${codeceptjs.event.}`);
});