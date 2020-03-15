const fs = require("fs");
const cp = require("child_process");

function readConfig() {
    // console.log(`------------`);
    // console.log(process.argv);

    let setup = process.env.SETUP;
    let tenant = process.env.TENANT;

    let jsonObject = JSON.parse(fs.readFileSync("config.json", {encoding: "utf8"})).eProc;

    if(!setup && !tenant) {
        console.log(`false for process`);
        // setup = jsonObject.SETUP;
        // tenant = jsonObject.TENANT;
    }
    else {
        console.log(`true for process ${process.env}`);
        jsonObject.SETUP = setup;
        jsonObject.TENANT = tenant;
    }
    console.log(`setup -- ${jsonObject.SETUP}\ntenant -- ${jsonObject.TENANT}`);
    global.config = jsonObject;
}

readConfig();

console.log("Executing bootstrap");
cp.execSync("npm install");
console.log(`*****modules installed*****`);