const os = require("os");
const path = require("path");
const math = require("./math");
//destructure a specific entitiy so you dont have to use dot notation
//const { add, subtract, multiply, divide } = require(./math);

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
console.log(math.multiply(2, 3));
console.log(math.divide(2, 3));
