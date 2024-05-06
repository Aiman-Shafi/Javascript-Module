let userName = "Rony"; // string
let age = 34; // number
let isMarried = false; // yes or no - boolean

// if (isMarried == true) {
//   console.log(userName, "is married");
// }

// if (isMarried == false) {
//   console.log(userName, "is unmarried");
// }

let password = "python01235";

// if (password == "python012345") {
//   console.log("User Logged in Succesfully");
// } else {
//   console.log("Invalid Password");
// }

let isDarkMode = false;

// if (isDarkMode == true) {
//   console.log("Darkmode is enabled");
// } else {
//   console.log("Darkmode is disabled");
// }

age = 40; // assigning a value

age < 40; // less than
age > 40; // greater than
age == 40; // equality
age === 40; // strict equality
age !== 40; // not equal
age <= 40; // less than equal
age >= 40; // greater than equal

let personAge = 20;

// if age is greater than 40 => "old"
// if age is greater than 30 => "mature"
// if age is greater than 20 => "adult"

if (personAge >= 40) {
  console.log("he is an old guy");
} else if (personAge >= 30) {
  console.log("he is a mature guy");
} else if (personAge >= 20) {
  console.log("he is an adult guy");
} else {
  console.log("children");
}

let temperature = 25;

if (temperature >= 40) {
  console.log("Weather is extreme hot!");
} else if (temperature >= 36) {
  console.log("Weather is too hot!");
} else if (temperature >= 30) {
  console.log("Weather is hot!");
} else if (temperature >= 25) {
  console.log("Weather is normal!");
} else if (temperature >= 20) {
  console.log("Winter is coming :3");
} else {
  console.log("Winter is here...");
}

// Write a program where there will be 3 Courses naming Math, English , Science.
// Find out the average marks of 3 courses
// Find the actual grade following the below conditions
// 90 -> A+
// 80 -> A
// 60 -> B+
// 50 -> C
// 40 -> D
// Below 40 IS FAIL!

let math = 45;
let english = 66;
let science = 70;

let totalMarks = math + english + science;
let averageMarks = totalMarks / 3;

console.log("Total Marks", totalMarks);
console.log("Average Marks", averageMarks);
