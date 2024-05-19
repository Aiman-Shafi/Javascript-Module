let person = {
  name: "Travis",
  age: 15,
  profession: "cricketer",
  isMarried: true,
  showMessage: function () {
    console.log(this.name, "is a", this.profession);
  },
  showIfMarried: function () {
    if (this.isMarried) {
      console.log("Travis is married");
    } else {
      console.log("Travis is unmarried");
    }
  },
  checkIfAdult: function () {
    if (this.age > 18) {
      console.log(this.name, "is an adult");
    } else {
      console.log("still a child!");
    }
  },
};

person.showMessage();
person.showIfMarried();
person.checkIfAdult();

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

// console.log(person.name);
// console.log(person.age);
// console.log(person.profession);
// console.log(car.brand); // dot notation
// console.log(person["age"]); // bracket notation
