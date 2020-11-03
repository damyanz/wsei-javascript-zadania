//Zadanie 1:
const arr = ["Lorem", 14, "dolor", "sit", 11];
arr.forEach((val) => console.log(val));

//Zadanie 2:
const arr = ["Lorem", 14, "dolor", "sit", 11];

//1:
console.log(arr[0], arr[1]);
//2:
console.log(arr[arr.length - 1]);
//3:
arr.forEach((val) => console.log(val));
//4:
arr.forEach((val, idx) => idx % 2 === 1 && console.log(val));
//5:
arr.forEach((val) => typeof val === "string" && console.log(val));
//6
arr.forEach((val) => typeof val === "number" && console.log(val));

//Zadanie 3:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];

//1:
const sum = numbers.reduce((a, b) => a + b);
console.log(sum);
//2:
const diff = numbers.reduce((a, b) => a - b);
console.log(diff);
//3:
const avg = numbers.reduce((a, b) => a + b) / numbers.length;
console.log(avg);
//4:
const even = numbers.filter((val) => val % 2 === 0);
console.log(even);
//5:
const odd = numbers.filter((val) => val % 2 === 1);
console.log(odd);
//6:
const max = Math.max(...numbers);
console.log(max);
//7:
const min = Math.min(...numbers);
console.log(min);
//8:
console.log([...numbers].reverse());

//Zadanie 4:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const sumAll = (arr) => arr.reduce((a, b) => a + b);
console.log(sumAll(numbers));

//Zadanie 5:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const getMultiplied = (arr) => {
  const avg = arr.reduce((a, b) => a + b) / arr.length;
  arr.forEach((val) => console.log(val * avg));
};
getMultiplied(numbers);

//Zadanie 6:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const getEvenAvg = (arr) => {
  const even = arr.filter((val) => val % 2 === 0);
  return even.reduce((a, b) => a + b) / even.length;
};
console.log(getEvenAvg(numbers));

//Zadanie 7:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const getSorted = (arr) => arr.sort((a, b) => a - b);
console.log(getSorted(numbers));

//Zadanie 8:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const strings = ["Lorem", "ipsum", "dolor", "sit", "amet"];
const sumIndexes = (arrA, arrB) => [
  ...arrA.map((val, idx) => idx),
  ...arrB.map((val, idx) => idx),
];
console.log(sumIndexes(numbers, strings));

//Zadanie 9:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const removeFromArray = (arr, item) => arr.filter((val) => val !== item);
console.log(removeFromArray(numbers, 43));

//Zadanie 10:
const numbers = [12, 43, 19, 23, 64, 39, 20, 11, 37];
const getOpposed = (arr) => arr.map((val) => -val);
console.log(getOpposed(numbers));
