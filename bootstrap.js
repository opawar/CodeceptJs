// const cp = require("child_process");
const logger = require("./logger");

module.exports = {
    bootstrap: function () {
        console.log("Executing bootstrap");
        // logger.info(`**********bootstrap ${Object.keys(test)}*********`);
        // cp.execSync("npm install");
        // console.log(`*****modules installed*****`);

        

        // let number = Math.random();
        // logger.addContext("user", number);
        // logger.info(`********${number}`);
    },
    teardown: function () {

    }
}