//Zadanie 1:
let car = {
  manufacturer: "Ford",
  model: "Focus",
  production_year: "2014",
};
console.log(car.manufacturer);
console.log(car.model);
console.log(car.production_year);

//Zadanie 2:
car = {
  ...car,
  changeName: function (newName) {
    this.model = newName;
  },
};
car.changeName("Mondeo");
console.log(car.model);

//Zadanie 3:
const calc = {
  sum: 0,
  sumArr: function (arr) {
    this.sum = arr.reduce((a, b) => a + b);
  },
};

calc.sumArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(calc.sum);

//Zadanie 4:
const car = {
  manufacturer: "BMW",
  model: "X4",
  age: 3,
};

for (const key in car) console.log(`${key}: ${car[key]}`);

//Zadanie 5:
const car = {
  manufacturer: {
    name: "BMW",
    fullName: "Bayerische Motoren Werke AG",
    country: "Germany",
  },
  model: "X4",
};
for (const key in car.manufacturer)
  console.log(`${key}: ${car.manufacturer[key]}`);

//Zadanie 6:
car.sayHello = () => console.log("Hello");
car.sayHello();
