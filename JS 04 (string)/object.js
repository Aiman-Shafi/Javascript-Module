let person = {
  name: "Travis",
  age: 34,
  profession: "cricketer",
  isMarried: false,
};

let car = {
  brand: "BMW",
  model: 2013,
  color: "blue",
};

let car2 = {
  brand: "Toyota",
  model: 2024,
  color: "red",
};

console.log(person.name);
console.log(person.age);
console.log(person.profession);
console.log(car.brand); // dot notation
console.log(person["age"]); // bracket notation
