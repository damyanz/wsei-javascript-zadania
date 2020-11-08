//Zadanie 1:
function Person(firstName, lastName, age, country, city, language) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;

  this.setAge = function (value) {
    this.age = value;
  };
  this.setCity = function (value) {
    this.city = value;
  };
}

const person1 = new Person("John", "Doe", 56, "USA", "Chicago", "english");
const person2 = new Person("Jan", "Kowalski", 27, "Poland", "Warsaw", "polish");
const person3 = new Person("Ralf", "Bach", 18, "Germany", "Berlin", "german");
const person4 = new Person("Creis", "Caouet", 32, "France", "Paris", "french");
const person5 = new Person("Vlad", "Žel", 72, "Czech Rep", "Prague", "czech");

const people = [person1, person2, person3, person4, person5];
people.forEach((val) => console.log(val));

const cities = ["Krakow", "Ostrava", "Beijing", "Liverpool", "Roma"];

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

people.forEach((person) => {
  person.setCity(cities[getRandomInt(cities.length - 1)]);
  person.setAge(getRandomInt(100));
  console.log(person);
});

//Zadanie 2:
function Calc() {
  this.memory = [];
  this.result = 0;
}

Calc.prototype = {
  operation: function (a, b, op) {
    switch (op) {
      case "+":
        this.result = a + b;
        break;
      case "-":
        this.result = a - b;
        break;
      case "*":
        this.result = a * b;
        break;
      case "/":
        this.result = a / b;
        break;
    }
    const concatOperation = a + op + b + "=" + this.result;
    this.memory.push(concatOperation);
  },
  showMem: function () {
    return this.memory;
  },
  wipeMem: function () {
    return (this.memory = []);
  },
};

const calculator = new Calc();
const Calculator2 = new Calc();
calculator.operation(12, 3, "+");
calculator.operation(64, 16, "-");
calculator.operation(12, 2, "*");
calculator.operation(40, 10, "/");
console.log(calculator.showMem());

calculator2.operation(16, 5, "+");
calculator2.operation(123, 23, "-");
calculator2.operation(10, 13, "*");
calculator2.operation(120, 19, "/");
console.log(calculator2.showMem());

calculator.wipeMem();
calculator2.wipeMem();

console.log(calculator.showMem());
console.log(calculator2.showMem());
