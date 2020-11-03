//Zadanie 1:

let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log(`Cześć po raz ${counter}`);
  if (counter === 15) clearInterval(interval);
}, 3000);

//Zadanie 2:

const arr = ["Lorem", "ipsum", "dolor", "sit", "amet"];
let counter = 0;

const timeout = setTimeout(async () => {
  arr.forEach((word) => console.log(word));

  const interval = setInterval(() => {
    console.log(arr[counter]);
    counter++;
    if (counter === arr.length) clearInterval(interval);
  }, 3000);
}, 2000);
