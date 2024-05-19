// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for loop

// odd number = 1,3,5,7,9,11,13,,15,17,19...
// even number = 2,4,6,14,16,20,22,24,...

// for (let i = 40; i <= 180; i++) {
//   console.log(i);
// }

// for (let i = 40; i <= 180; i++) {
//   if (i % 2 !== 0) {
//     console.log("odd number", i);
//   } else {
//     console.log("even number", i);
//   }
// }

function showListOfNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log("odd number", i);
    } else {
      console.log("even number", i);
    }
    // console.log(i);
  }
}

// showListOfNumbers(10, 20);
// showListOfNumbers(100, 500);

// let animals = ["bird", "cat", "dog", "parrot", "fox", "wolf"];

// for (let index = 0; index < animals.length; index++) {
//   console.log(animals[index]);
// }

// let a = 10;
// console.log(a);

// // a++; // 11
// // a++; // 12
// // a++; // 13
// a--; // 9
// a--; // 8
// a--; // 7
// console.log(a); // 7

// console.log(10 % 2);
// console.log(9 % 2);
// console.log(199 % 2);

// while loop

let num = 10;

while (num <= 20) {
  console.log(num);
  num++;
}
