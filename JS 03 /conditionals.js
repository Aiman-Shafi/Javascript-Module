// console.log("test");

let userName = "anamul";
let userPass = "test03345";
let age = 333;

// LOGICAL OPERATOR

// OR -> ||
// AND -> &&

if (userPass === "test0345" || userName === "anamul" || age >= 30) {
  console.log(userName, "successfully logged into the system");
} else {
  console.log("wrong user");
}

// one line if condition
// if (age > 30) console.log("my age is", age);

// logical OR
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(false || false || false || false); // true

// logical AND

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(false && true); // false
// console.log(true && true && true && false); // false

let isDarkmode = true;

// if (isDarkmode === true) {
//   console.log("dark mode is on");
// }
// if (isDarkmode) {
//   console.log("dark mode is on 2");
// } else {
//   console.log("light mode is on!");
// }

// Falsey Values in Javascript

// Undefined
// null
// 0
// ""
// NaN
// false

// (condition) ? __true__ : __false__
let temp = 32;

// ternary opeartor
// temp >= 30
//   ? console.log("temperature is hot")
//   : console.log("temperature is normal");

isDarkmode ? console.log("dark mode is on!") : console.log("dark mode is off!");

// === strict equality // check for both value & type
// == equality // check only for value

let personAge = "40";

console.log(typeof personAge);

// if (personAge == 40) {
//   console.log("age is", personAge);
// } else {
//   console.log("no age found!", personAge);
// }

if (personAge === 40) {
  console.log("age is", personAge);
} else {
  console.log("no age found!");
}
