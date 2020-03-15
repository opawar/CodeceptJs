const yargs = require("yargs");
const actions = require("./actions");

// node app add/remove/print/priceOf --item=abc --price=123

let command = yargs.argv._[0];
let item = yargs.argv.item;
let price = yargs.argv.price;

if(command === "add") {
    actions.add(item, price);
}
else if(command === "remove") {
    actions.remove(item);
}
else if(command === "print") {
    actions.print();
}
else if(command === "priceOf") {
    actions.priceOf(item);
}
else {
    console.log(`Invalid command '${command}'. Possible commands\n 'add | remove | print | priceOf`);
}