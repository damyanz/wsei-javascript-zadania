//Zadanie 1:
function Calc(firstName, lastName, age, country, city, language) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.country = country
  this.city = city
  this.language = language

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
Array.map
function Calc() {
  this.history = function () {
    this.stack: []
    push: (operation, arguments, result) => {
      this.stack = [{ operation, arguments, result }, ...this.stack]
    },
      clear: () => {
        this.stack = [];
      },
        show: () => console.log(this.stack)
  }
  this.add = (...args) => {
    const result = [...args].reduce((acc, val) => acc + val);
    this.history.push("add", [...args], result)
    console.log(result)
  }
}
class Calc {
  constructor(...args) {
    this.historyStack = []
    this.arguments = [...args]
  }

  [].map()
  showHistory() {
    console.log(this.historyStack)
  }
  clearHistory() {
    this.historyStack = [];
  }
  saveInHistory() {
    this.historyStack = [, ...this.historyStack]
  }
}


