// let sentence = "Javasript is a popular programming language";

// console.log(typeof sentence);
// console.log(sentence);

// let language = "python";
// let sentence = " is a popular programming language";
// let newSentence = language.concat(sentence);

// console.log(language + sentence);
// console.log(language, sentence);
// console.log(newSentence);

let pLanguage = "javascript";
let userName = "Ahmed";
let year = 1996;

let newSentence = `
Hi ${userName},

Do you know? ${pLanguage} is a popular programming language. It was first founded on ${year}

`;

// console.log(sentence);

// substring

let quote = "Life is short! Enjoy it";
let output = quote.substring(5, 10);

// console.log(output);

let saying = "          Time Flies! Wake up before it gone!  ";

// slice
let newSaying = saying.slice(0, 20);
// console.log(newSaying + ".. view more");

// chartAt (index)
// console.log(saying.charAt(28));

// indexOf
// console.log(saying.indexOf("!"));
// console.log(saying.lastIndexOf("el"));

// includes
let includes = saying.includes("Wake");
// console.log(includes);

// search
let search = saying.search("wake");
// console.log(search);

// uppercase
let uppercase = saying.toUpperCase();
// console.log(uppercase);

// lowercase
let lowercase = saying.toLowerCase();
// console.log(lowercase);

// trim
let trim = saying.trim();
// console.log(trim);

// find if the word "Enjoy" present in the new given sentence.

let natureWords = "Hello, i always love to enjoy the beauty of nature";

let searchWord = "HellO";

let newNatureWords = natureWords.toLowerCase();

if (newNatureWords.includes(searchWord.toLowerCase())) {
  console.log(`Yes, ${searchWord} is present in the sentence`);
} else {
  console.log("404 not found! ");
}

let emailAddress = "aiman23@Gmail.com";
let checkFor = "@gmail.com";

console.log(emailAddress.search(checkFor));

if (emailAddress.toLowerCase().search(checkFor.toLowerCase()) !== -1) {
  console.log("Correct Email Format");
} else {
  console.log("Incorrect format use", checkFor);
}
