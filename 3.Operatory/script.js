//Zadanie 1:
let boolA = true;
let boolB = false;

console.log(boolA === boolB); //false

//Zadanie 2:
const numA = 10;
const numB = 3;

let moduloResult = 0;
moduloResult = numA % numB;
console.log(moduloResult); //1

//Zadanie 3:
let textA = "foo ";
let textB = "bar";
let stringsResult = "";

stringsResult = textA + textB;
console.log(stringsResult); //"foo bar"

//Zadanie 4:
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); //true - operator == nie sprawdza typów zmiennych
console.log(someNumber === someString); //false - operator === sprawdza typy zmiennych

//Zadanie 5:
let counter = 30;

console.log(counter); //30

counter++;
console.log(counter); //31

counter--;
console.log(counter); //30

//Zadanie 6:
let numA = 15;
let numB = 25;
let result = null;

result = numA > numB;
console.log(result); //false
