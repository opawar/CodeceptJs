const appSettings = {
    log4js: {
        traceLogConfig: {
            appenders: {
                fileAppender: {
                    type: "file",
                    filename: "./log4js.log"
                },
                consoleAppender: {
                    type: "console",
                    layout: {
                        type: "pattern",
                        pattern: "%d{MM/dd/yyyy-hh:mm:ss} :: %[[%p]%] == %X{user} -- %[%m%]",
                        // tokens: {
                        //     user: "TEST_TOKEN"
                        // }
                    }
                }
            },
            categories: {
                default: {
                    appenders: ["fileAppender", "consoleAppender"],
                    level: "info"
                }
            }
        }
    }
};

module.exports = appSettings;