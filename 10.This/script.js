//Zadanie 1:

function Person(firstName, lastName, age, country, city) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.country = country;
  this.city = city;

  this.showInfo = function () {
    const props = ["firstName", "lastName", "age", "country", "city"];
    props.forEach((prop) => console.log(`${prop}: ${this[prop]}`));
  };

  this.addAge = function () {
    return ++this.age;
  };
}

const person = new Person("Jan", "Kowalski", 35, "Poland", "Cracow");
const person2 = new Person("John", "Doe", 40, "USA", "Washington");

person.showInfo();
person.addAge();
console.log(person.age);
person.addAge();
console.log(person.age);
person.addAge();
console.log(person.age);

person2.showInfo();
person2.addAge();
console.log(person2.age);
person2.addAge();
console.log(person2.age);

//Zadanie 2:
Person.prototype.favoriteFood = [];
Person.prototype.showFavoriteFood = function () {
  this.favoriteFood.forEach((food) => console.log(food));
};
Person.prototype.addFavoriteFood = function (food) {
  this.favoriteFood = [...this.favoriteFood, food];
};

//Zadanie 3:
function Calc() {
  this.a = 0;
  this.b = 0;
}

Calc.prototype = {
  setNumbers: function (a, b) {
    this.a = a;
    this.b = b;
  },
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
  multiply: function () {
    return this.a * this.b;
  },
  divide: function () {
    if (this.b === 0) {
      console.log("Błąd! Nie można dzielić przez 0!");
      return;
    } else {
      return this.a / this.b;
    }
  },
};

const calc1 = new Calc().setNumbers(10, 15);
const calc2 = new Calc().setNumbers(34, 11);

console.log(calc1.add());
console.log(calc1.subtract());
console.log(calc1.multiply());
console.log(calc1.divide());

console.log(calc2.add());
console.log(calc2.subtract());
console.log(calc2.multiply());
console.log(calc2.divide());

//Zadanie 4:
function Ladder(steps) {
  this.steps = steps;
  this.currentStep = 0;

  this.goUp = function (n) {
    const tempStep = this.currentStep + n;
    if (tempStep >= this.steps) {
      console.log(
        `Nie możesz wejść tak wysoko. Drabina ma tylko ${this.steps} stopni! Trafiasz na szczyt`
      );
      this.currentStep = this.steps;
      return;
    }
  };

  this.goDown = function (n) {
    const tempStep = this.currentStep - n;
    if (tempStep < 0) {
      console.log(
        `Nie możesz zejść pod powierzchnię. Schodzisz z drabiny na ziemię.`
      );
    }
    this.currentStep = tempStep;
    return;
  };

  this.getCurrentStep = function () {
    return this.currentStep;
  };
}

const climberGame = new Ladder(20);
climberGame.goUp(10);
console.log(climberGame.getCurrentStep());
climberGame.goDown(3);
climberGame.goDown(15);
console.log(climberGame.getCurrentStep());
