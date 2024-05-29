// Write a function called reverseString that takes a string as an argument and returns the string reversed.

let sentence = "JS is a Programming Language";

// hello -> olleh
// outcome -> egaugnal gni..

function reverseString(string) {
  return string.split(" ").reverse().join(" ");
}

let reverse = reverseString(sentence);
// console.log(reverse);
// console.log(reverseString("creative frontend"));

// showing array item to DOM (html)
const heading = document.getElementById("heading");
const list = document.getElementById("list");
let newString = sentence.split("");

// for (let i = 0; i < newString.length; i++) {
//   console.log(newString[i]);
//   list.innerHTML += `<li>${newString[i]}</li>`;
// }

const users = [
  { name: "Aziz", id: 1, age: 25 },
  { name: "Hamim", id: 2, age: 26 },
  { name: "Iqbal", id: 3, age: 27 },
  { name: "Redoy", id: 4, age: 28 },
  { name: "SHSH", id: 5, age: 29 },
  { name: "Hakim", id: 6, age: 30 },
];

// for (let user = 0; user < users.length; user++) {
//   console.log(users[user].name);
//   document.getElementById("users").innerHTML += `
//   <div class="user-list">
//     <h2>${users[user].name}</h2>
//     <p>${users[user].age}</p>
//   </div>`;
// }

// users.forEach((user) => {
//   document.getElementById("users").innerHTML += `
//       <div class="user-list">
//         <h2>${user.name}</h2>
//         <p>${user.age}</p>
//       </div>`;
// });

// Create a function called extractDomain that takes an email address as a string and returns only the domain part.

// john@shopify.com
// aiman@wordpress.com

function extractDomain(email = "aiman.shafi@shopify.com") {
  let index = email.indexOf("@");
  return email.substring(index + 1);
}

// console.log(extractDomain("aiman@wordpress.com"));

// Write a function called wordExists that takes two strings: a sentence and a word. The function should return true if the word exists in the sentence and false otherwise.

function wordExists(sentence, word) {
  let wordExists = sentence.includes(word);
  //   console.log(wordExists);
  if (wordExists) {
    return `${word} is present in the sentence`;
  } else {
    return `${word} not found!`;
  }
}

// console.log(wordExists("JS Problem Solving", "hello"));

// Get Words Longer Than N -> Create a function called getLongWords that takes a string and a number n. Return an array of words that are longer than n characters.

// JS Problem Solving , 6
// output -> [Problem, Solving]

let newSentence = "Javascript is one of the most popular programming language";

// console.log(newSentence.length);

// let split = newSentence.split(" ").filter((word) => word.length > 8);
// console.log(split);

// function getLongWords(sentence, n) {
//   let getLongWords = sentence.split(" ").filter((word) => word.length > n);
//   return getLongWords;
// }

// console.log(
//   getLongWords("Javascript is one of the most popular programming language", 0)
// );

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumber = arr.filter((num) => {
  return num % 2 === 0;
});

let oddNumber = arr.filter((num) => {
  return num % 2 !== 0;
});

let number = arr.filter((num) => {
  return num > 6;
});

// map / forEach / for
// arr.map((item) => console.log(item + 1 + " new number"));

// console.log(number);

// Create a function called removeCharacter that takes a string and a character to remove. The function should return the string with all occurrences of the specified character removed.

let mySentence = "A fox is jumping Over the rIver";

// console.log(mySentence.split(" ").join(" "));

// let removeSomething = mySentence.split("i");
// console.log(removeSomething.join(""));

function removeCharacter(sentence, letter) {
  return sentence.toLowerCase().split(letter.toLowerCase()).join("");
}

// console.log(removeCharacter(mySentence, "R"));

// create a function to remove duplicate items from an array

let fruits = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "guava",
  "orange",
  "banana",
];

// let removeDuplicate = fruits.filter();

let removeDuplicate = fruits.filter(
  (item, index) => fruits.indexOf(item) === index
);

// console.log(removeDuplicate);

// function removeDuplicateItem(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicateItem(fruits));
