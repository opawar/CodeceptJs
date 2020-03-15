const fs = require("fs");
const fileName = "grocery.json";

function readFile(fileName) {
    let jsonArray = new Array();
    try {
        jsonArray = JSON.parse(fs.readFileSync(fileName, { encoding: "utf8" }));
    }
    catch (e) {
        //console.log(`file ${fileName} not present`);
    }
    return jsonArray;
}

function writeFile(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data));
}

module.exports = {
    add(item, price) {
        let groceryArray = readFile(fileName);
        let index = groceryArray.findIndex((x) => x.item === item);
        if(index === -1) {
            groceryArray.push({"item": item, "price": price});
        }
        else {
            groceryArray[index].price += price;
        }
        writeFile(fileName, groceryArray);
    },

    remove(item) {
        let groceryArray = readFile(fileName);
        groceryArray = groceryArray.filter((x) => x.item != item);
        writeFile(fileName, groceryArray);
    },

    print() {
        let groceryArray = readFile(fileName);
        console.log(JSON.stringify(groceryArray));
    },

    priceOf(item) {
        let groceryArray = readFile(fileName);
        let price = groceryArray[groceryArray.findIndex((x) => x.item === item)].price;
        console.log(`price of ${item} is ${price}`);
        // if(index != -1) {
        // }
        // else {
        //     console.log(`${item} not present in the grocery list`);
        // }
    }
}

// module.exports.add = (item, price) => {
//     let groceryArray = readFile(fileName);
//     let index = groceryArray.findIndex((x) => x.item === item);
//     if (index === -1) {
//         groceryArray.push({ "item": item, "price": price });
//     }
//     else {
//         groceryArray[index].price += price;
//     }
//     writeFile(fileName, groceryArray);
// };

// module.exports.remove = (item) => {
//     let groceryArray = readFile(fileName);
//     groceryArray = groceryArray.filter((x) => x.item != item);
//     writeFile(fileName, groceryArray);
// };

// module.exports.print = () => {
//     let groceryArray = readFile(fileName);
//     console.log(JSON.stringify(groceryArray));
// };

// module.exports.priceOf = (item) => {
//     let groceryArray = readFile(fileName);
//     let price = groceryArray[groceryArray.findIndex((x) => x.item === item)].price;
//     console.log(`price of ${item} is ${price}`);
//     // if(index != -1) {
//     // }
//     // else {
//     //     console.log(`${item} not present in the grocery list`);
//     // }
// };