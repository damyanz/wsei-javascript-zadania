//Zadanie 1:
const showSuccess = () => console.log("Udało się!");
showSuccess();

//Zadanie 2:
const showParam = (param) => console.log(param);
showParam(Math.random());

//Zadanie 3:
const arr = ["Lorem", "ipsum", "dolor", "sit", "amet"];
const getArr = (arr) => arr;
getArr(arr);

//Zadanie 4:
const showString = (string) => {
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    console.log(counter + " " + string);
    if (counter === 5) {
      console.log("Koniec");
      clearInterval(interval);
    }
  }, 3000);
};

showString("Przyklad");
