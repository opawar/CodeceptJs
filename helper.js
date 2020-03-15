const { Helper } = codeceptjs;
const logger = require("./logger");

class CustomHelper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before(test) {
    logger.addContext("user", test.title);
    // logger.info(`########`);
    // logger.info(`########${test.title}`);
    // logger.info(`**********_before ${Object.keys(test)}**********`);
    // logger.info(`**********_before ${test.body}**********`);
    logger.info(`********** Executing scenario ${test.title} **********`);
  }

  /**
   * @protected
   */
  _after(test) {
    // logger.info(`**********_after ${Object.keys(test)}**********`);
  }
  
  _beforeSuite(suite) {
    // logger.info(`**********_beforeSuite ${Object.keys(suite._onlyTests)}**********`);
    // logger.info(`**********_beforeSuite ${suite.pending}**********`);
    logger.info(`********** Executing suite ${suite.title} **********`);
  }
  
  _afterSuite(suite) {
    // logger.info(`**********_afterSuite ${Object.keys(suite.tests)}**********`);
    // logger.info(`**********_afterSuite ${suite.pending}**********`);
    logger.info(`********** Execution completed of suite ${suite.title} **********`);
  }

  _passed(test) {
    // logger.info(`**********_passed ${Object.keys(test)}**********`);
    // logger.info(`**********_passed ${}**********`);
    logger.info(`********** Execution completed of scenario ${test.title} **********`);
  }
  
  _failed(test) {
    // logger.info(`**********_failed ${Object.keys(test)}**********`);
    // logger.info(`**********_failed ${}**********`);
    logger.info(`********** Execution completed of scenario ${test.title} **********`);
    
  }
  
  _beforeStep(step) {
    // logger.info(`**********_beforeStep ${Object.keys(step)}**********`);
    // logger.info(`**********_beforeStep ${step.name}**********`);
    logger.info(`********** ${step.name} ${step.args} **********`);
  }
  
  _afterStep(step) {
    // logger.info(`**********_afterStep ${Object.keys(step)}**********`);
    // logger.info(`**********_afterStep ${step.name}**********`);
    logger.info(`********** ${step.name} ${step.args} **********`);

  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = CustomHelper;
