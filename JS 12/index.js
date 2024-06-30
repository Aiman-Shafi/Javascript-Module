// Destructuring

const users = ["Reza", "Anamul", "Hosen", "Rakib"];

//Without Destructuring
// console.log(users[0]);
// console.log(users[2]);

const [userOne, userTwo, userA] = users;

console.log(userA); // hosen

const newPerson = {
  name: "Karim",
  age: 34,
  canDrive: true,
  country: "Sri Lanka",
};

//Without Destructuring
// let name = newPerson.name;
// console.log(newPerson.country, name);

// const { age, name, canDrive } = newPerson;
// console.log(age);

function persona({ name, country }) {
  console.log(`my name is ${name} and i live in ${country}`);
}

// persona("rahim", "india");
persona(newPerson);

// Spread Operator

const group1 = [1, 3, 4];
const group2 = [10, 11, 12, 14];

const combineGroup = group1.concat(group2);
console.log(combineGroup);

const newGroup = [...group1, ...group2];
console.log(newGroup);

function sum(x, y, z) {
  console.log(x + y + z);
}

sum(...group2);
