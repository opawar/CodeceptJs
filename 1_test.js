const logger = require("./logger");
// const codeceptjs = require("codeceptjs");
const testjs = require("./test");

Feature('Testing1');

Scenario('test11111 @tag1', (I) => {
    logger.info("inside scenario11111");
    I.wait(1);
    I.waitForClickable("");
    testjs.func();
    I.wait(1);
    // throw new Error("hi");
    // logger.info(`------${codeceptjs.event.}`);
});

// Scenario('test21111 @tag1', (I) => {
//     logger.info("inside scenario21111");
// });

// Scenario('test31111 @tag1', (I) => {
//     logger.info("inside scenario31111");
// });

// Scenario('test41111 @tag1', (I) => {
//     logger.info("inside scenario41111");
// });

// Scenario('test51111 @tag1', (I) => {
//     logger.info("inside scenario511111");
// });
