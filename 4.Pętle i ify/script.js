//Zadanie 1:
let numA = 15;
let numB = 20;

if (numA > numB) {
  console.log(numA);
} else {
  console.log(numB); //20
}

//Zadanie 2:
let numA = 15;
let numB = 25;
let numC = 35;

if (numA > numB && numA > numC) {
  console.log(`${numA} jest największe`);
} else if (numB > numA && numB > numC) {
  console.log(`${numB} jest największe`);
} else {
  console.log(`${numC} jest największe`);
}

//Zadanie 3:
for (let i = 0; i < 10; i++) console.log("Lubię JavaScript");

//Zadanie 4:
let result = 0;
for (let i = 1; i <= 10; i++) result += i;

console.log(result); //55

//Zadanie 5:
var n = 5;
for (let i = 1; i <= n; i++)
  console.log(`${i} - ${i % 2 ? "nieparzysta" : "parzysta"}`);

//Zadanie 6:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i = ${i}, j= ${j}`);
  }
}

//Zadanie 7:
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

//Zadanie 8:
//a):
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//b):
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "";
  }
  console.log(row);
}
