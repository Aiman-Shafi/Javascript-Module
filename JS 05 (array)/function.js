// let num3 = 50;
// let num4 = 30;

// let num5 = 50;
// let num6 = 30;

// console.log(num1 + num2);
// console.log(num3 + num4);
// console.log(num5 + num6);

// let num1 = 20;
// let num2 = 50;

function addition(num1 = 1, num2 = 2, num3 = 0) {
  console.log("addtion", num1 + num2 + num3);
  console.log("subtraction", num1 - num2);
  console.log("multiply", num1 * num2);
}

// addition(30, 40, 120, 30); // call / invoke

function showUserName(user) {
  console.log("Hello,", user, "Welcome to the Javascript Course!");
}

// showUserName("Noyon");
// showUserName("Maruf");
// showUserName("Arman");

function multiply(num1, num2) {
  let multiply = num1 * num2;
  return multiply;
}

let newMultiply = multiply(10, 2);

// console.log(newMultiply);

function subtraction(x, y) {
  let substract = x - y;
  return substract;
}

// console.log(subtraction(10, 4));

// arrow function

const division = (num1, num2) => {
  let divide = num1 / num2;
  return divide;
};

console.log(division(10, 20));

// immediate invoke function

(function () {
  console.log("new function is running...");
})();

const newSum = (function (a, b) {
  console.log(a + b);
})(19, 20);

function gmailChecker(emailAddress) {
  const checkFor = "@gmail.com";
  if (emailAddress.toLowerCase().search(checkFor.toLowerCase()) !== -1) {
    console.log("Correct gmail Format");
  } else {
    console.log(emailAddress, "Incorrect format use", checkFor);
  }
}

gmailChecker("text123@gmail.com");
gmailChecker("text@mail.com");
gmailChecker("text12@gmail.com");
gmailChecker("textw12@gmail.com");
