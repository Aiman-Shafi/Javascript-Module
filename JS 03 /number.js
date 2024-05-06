// console.log("js numbers");

let carModel = 2013; // 1,3,4,577,889,7778, -> round number / natural number / interger number

let decimalNum = 30.44566; // decimal number / floating point number

// console.log(typeof carModel)

let num1 = 34;
let num2 = 3.3099956;

let add = num1 + num2;

// toFixed()
// console.log("addition:", add.toFixed(2));

// round number - convert a number to a Round number (.5 er upore gele next value chole ashbe -> 13.5 -> 14)

let roundNum = Math.round(99.4);
// console.log("Round Number:", roundNum);

//Math.ceil - whatever the decimal value is the result will always be on the upper level. 14.23 -> 15

let ceilNum = Math.ceil(99.1);
// console.log("Ceil Number:", ceilNum);

// Math.floor - // doesn't take the upper value how higher the decimal value is!

let floorNumber = Math.floor(99.9);
// console.log("Floor Number:", floorNumber);

// abs -> // turns negative number into positive value

let price = -45;
// console.log("Absolute Value", Math.abs(price));

const productPrice = add.toFixed(2);
// console.log("price:", productPrice);

const VAT = 20 + parseFloat(productPrice);
// const VAT = 20 + parseInt(productPrice);

// console.log("totalPrice:", VAT);

// Generate a Random Number (0 to 1)

// DICE - 1 - 6
const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log(randomNumber);

const generateOTP = Math.floor(Math.random() * 900 + 100);
console.log(generateOTP);
