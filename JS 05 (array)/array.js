const fruits = ["orange", "kiwi", "apple", "banana", "guava"];

// console.log(fruits);
// console.log(fruits[2]); // find an item through index
// console.log("fruits length:", fruits.length); // find no. of items present in an array

// array methods

fruits.pop(); // remove an item from the last index
fruits.push("straberry"); // add an item on the last index of an array

fruits.shift(); // remove an item from the first index
fruits.unshift("lichi"); // add an item on the first index

// console.log(fruits);

// joining an array

let moreFruits = ["apple", "banana", "watermelon"];

// console.log(fruits.concat(moreFruits));

// slicing an array

let animals = ["tiger", "cat", "dog", "lion", "cow", "zebra"];

console.log(animals);

// let slice = animals.slice(1, 4);
// console.log(slice);

// splice(startIndex, delete Count, items you want to add)

animals.splice(1, 0, "bird", "wolf");

// alphabetically sort a-z
animals.sort();

// reverse an array
animals.reverse();
console.log(animals);
