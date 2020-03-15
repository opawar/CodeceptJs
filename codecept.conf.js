// require("./readConfig");

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
    CustomHelper: {
      require: './helper.js',
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: "./bootstrap.js",
  teardown: "./bootstrap.js",
  mocha: {},
  name: 'Codeceptjs',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    }
  },
  customConfig: {
    setup: "partner"
  },
  multiple: {
    sanity: {
      chunks: 1
    }
  }
}