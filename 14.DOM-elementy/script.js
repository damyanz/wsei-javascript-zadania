// Zadanie 1:
const getElementsTags = (elements) =>
  [...elements].map((element) => element.tagName);
const tags = getElementsTags(document.querySelectorAll(".more-divs"));
console.log(tags);

// Zadanie 2:
const getElementInfo = (element) => {
  console.log(element.innerHTML);
  console.log(element.outerHTML);
  console.log(element.classList[0]);
  console.log([...element.classList]);
  console.log(element.dataset);
};
getElementInfo(document.querySelector(".short-list"));

// Zadanie 3:
const data = document.getElementById("datasetCheck");
const numberA = data.dataset.numberone;
const numberB = data.dataset.numbertwo;
const numberC = data.dataset.numberThree;

const calc = (a, b, c) => {
  const sum = +a + +b + +c;
  const diff = +a - +b - +c;
  console.log(`Wynik dodawania: ${sum}`);
  console.log(`Wynik odejmowania: ${diff}`);

  return {
    sum,
    diff,
  };
};

calc(numberA, numberB, numberC);

// Zadanie 4:
document.getElementById("spanText").textContent = "FooBar";

// Zadanie 5:
document.getElementById("spanText").className = "foo-bar";

// Zadanie 6:
const modifyElement = (element) => {
  const classNames = [...element.classList].map((className) => {
    console.log(className);
    return className;
  });
  console.log(classNames.join("+"));
  element.className = "";
  console.log("Usunięto wszystkie klasy");
};
modifyElement(document.getElementById("classes"));

// Zadanie 7:
const longListItems = document.querySelectorAll("#longList li");
const addAttribute = (elements) => {
  elements.forEach((element) => {
    if (!element.dataset.text) {
      element.dataset.text = "text";
    }
  });
};
addAttribute(longListItems);

// Zadanie 8:
const myDiv = document.getElementById("myDiv");
const setClassName = (newClass) => {
  if (typeof newClass !== "string") {
    console.log("Zły typ parametru.");
    return;
  }
  const className = getProp({ newClass });
  myDiv.className = className;
};
const getProp = (obj) => {
  const className = obj.newClass;
  return className;
};
setClassName("js-class");

// Zadanie 9:
const numbers = document.getElementById("numbers");
const randomNumber = Math.floor(Math.random() * 11);
const addClassNameByNumber = (number) => {
  if (number % 2 === 0 && number !== 0) {
    numbers.className = "even";
  } else {
    numbers.className = "odd";
  }
};
addClassNameByNumber(randomNumber);

// Zadanie 10:
const getValuesFromChildren = (element) => {
  const children = [...element.children];
  const values = children.map((child) => child.textContent);
  return values;
};
getValuesFromChildren(document.querySelector("#longList"));

// Zadanie 11:
const modifyChildrenValue = (elements) => {
  [...elements].forEach((element) => {
    const currentValue = element.textContent;
    const randomNumber = Math.floor(Math.random() * 11);
    element.dataset.oldValue = currentValue;
    element.textContent = randomNumber;
  });
};

modifyChildrenValue(document.querySelector("#longList").children);
