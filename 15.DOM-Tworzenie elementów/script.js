// Zadanie 1:
const newDiv = document.createElement("div");
newDiv.textContent = "To jest nowy element";
document.querySelector("#root").appendChild(newDiv);

// Zadanie 2:
const fruitList = document.createElement("ul");
const fruits = ["Apple", "Orange", "Grape", "Lemon", "Lime", "Pomelo"];
fruits.forEach((fruit) => {
  const item = document.createElement("li");
  item.textContent = fruit;
  fruitList.appendChild(item);
});
document.querySelector("#root").appendChild(fruitList);

// Zadanie 3:
fruitList.addEventListener("click", () => {
  const children = dynamicList.children;
  for (let i = 0; i < children.length; i++) {
    if (i % 2 !== 0) {
      fruitList.removeChild(children[i]);
    }
  }
});

// Zadanie 4:
const btn = document.createElement("button");
btn.textContent = "Zadanie 4";
document.querySelector("#root").appendChild(btn);
btn.addEventListener("click", (event) => event.currentTarget.remove());

// Zadanie 5:
const randomNumber = Math.floor(Math.random() * 11);
for (let i = 0; i <= randomNumber; i++) {
  const dynamicDiv = document.createElement("div");
  dynamicDiv.textContent = `To jest div numer ${i}`;
  document.querySelector("#root").appendChild(dynamicDiv);
}

// Zadanie 6:
const elements = {
  div1: "to jest div",
  span1: "to jest span",
  div2: {
    div3: "to jest div",
  },
  span2: "to jest span",
};
const renderElement = (tag, content) => {
  const element = document.createElement(tag);
  element.textContent = content;
  document.querySelector("#root").appendChild(element);
};
Object.entries(elements).forEach(([key, value]) => {
  if (typeof value === "string") {
    renderElement(key, value);
  } else {
    Object.entries(value).forEach(([key1, value1]) =>
      renderElement(key1, value1)
    );
  }
});

// Zadanie 7:
const wrapperA = document.createElement("div");
const wrapperB = document.createElement("div");
const listA = document.createElement("ul");
const lipsum = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur"];
lipsum.forEach((word) => {
  const listItem = document.createElement("li");
  listItem.textContent = word;
  listA.appendChild(listItem);
});
const listB = document.createElement("ul");
const btnA = document.createElement("button");
btnA.textContent = "Move to B";
const btnB = document.createElement("button");
btnB.textContent = "Move to A";
wrapperA.appendChild(listA);
wrapperA.appendChild(btnA);
wrapperB.appendChild(listB);
wrapperB.appendChild(btnB);
document.querySelector("#root").appendChild(wrapperA);
document.querySelector("#root").appendChild(wrapperB);
btnA.addEventListener("click", (e) => {
  listB.appendChild(listA.lastChild);
  if (listA.children.length === 0) {
    e.currentTarget.disabled = true;
  }
  if (listB.children.length > 0) {
    listB.disabled = false;
  }
});
btnB.addEventListener("click", (e) => {
  listA.appendChild(listB.lastChild);
  if (listB.children.length === 0) {
    e.currentTarget.disabled = true;
  }
  if (listA.children.length > 0) {
    listA.disabled = false;
  }
});

// Zadanie 8:
const form = document.createElement("form");
const input = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
const input4 = document.createElement("input");
const submit = document.createElement("button");
input.placeholder = "Tag";
form.appendChild(input);
input2.placeholder = "Tekst";
form.appendChild(input2);
input3.placeholder = "Kolor";
form.appendChild(input3);
input4.placeholder = "Liczba";
input4.type = "number";
form.appendChild(input4);
submit.textContent = "Utwórz";
form.appendChild(submit);
document.getElementById("root").appendChild(form);
const submitForm = (event) => {
  event.preventDefault();
  for (let i = 0; i < input4.value; i++) {
    const element = document.createElement(input.value);
    element.textContent = input2.value;
    element.style.color = input3.value;
    element.style.display = "block";
    form.after(element);
  }
};
form.addEventListener("submit", submitForm);

// Zadanie 9:
const formHeaders = ["Imię", " Nazwisko", "Wiek", "Ilośc dzieci"];
const formCreator = document.createElement("form");
const formSubmit = document.createElement("button");
const creatorBtn = document.createElement("button");
formSubmit.textContent = "Utwórz";
creatorBtn.textContent = "Dodaj wiersz";
creatorBtn.type = "button";
const renderFields = (data) => {
  const fieldsRow = document.createElement("div");
  fieldsRow.className = "table-row";
  data.forEach((value) => {
    const field = document.createElement("input");
    field.placeholder = value;
    fieldsRow.appendChild(field);
  });
  return fieldsRow;
};
const renderTable = (event) => {
  event.preventDefault();
  const existingtable = document.querySelector("custom-table");
  if (existingtable) {
    existingtable.remove();
  }
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const thead = document.createElement("thead");
  const rows = document.querySelectorAll(".table-row");
  tableHeaders.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    thead.appendChild(th);
  });
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const children = Array.from(row.children);
    const values = children.map((child) => child.value);
    values.forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.id = "custom-table";
  table.style.cssText = "text-align: left; width: 100%;";
  table.appendChild(thead);
  table.appendChild(tbody);
  formSubmit.after(table);
  formCreator.reset();
};
formCreator.appendChild(renderFields(formHeaders));
formCreator.appendChild(creatorBtn);
formCreator.appendChild(formSubmit);
creatorBtn.addEventListener("click", () => {
  const formRows = document.querySelectorAll(".form-row");
  const lastRow = formRows[formRows.length - 1];
  lastRow.after(renderFields(tableHeaders));
});
formCreator.addEventListener("submit", renderTable);
document.querySelector("#root").appendChild(formCreator);

// Zadanie 10:
const capitalize = () => {
  const formFields = document.querySelectorAll(".form-row input");
  formFields.forEach((field) => {
    field.addEventListener("input", (e) => {
      const formattedText =
        field.value.charAt(0).toUpperCase() + field.value.slice(1);
      e.target.value = formattedText;
    });
  });
};
capitalize();

// Zadanie 11:
const validateString = (string) => {
  const numbers = string.match(/\d/g);
  if (numbers) {
    const sum = numbers.reduce((a, b) => +a + +b);
    const multiplyResult = numbers.reduce((a, b) => a * b);
    console.log(`Suma: ${sum}`);
    for (let i = 0; i < multiplyResult; i++) {
      const element = document.createElement("div");
      element.textContent = `Suma liczb zawartych w stringu: ${sum}`;
      document.querySelector("#root").appendChild(element);
    }
  }
};
validateString("P0k3m0n");

// Zadanie 12:
const task = {
  text: "Ala ma kota",
  checkText: function () {
    Object.keys(this).some((key) => {
      const value = this[key];
      if (typeof value === "string") {
        if (value.match(/Ala/)) {
          this[key] = value.replace("Ala", "Ola");
        } else {
          const element = document.createElement("div");
          element.textContent = "Słowo Ala nie występuje w tekście.";
          document.querySelector("#root").appendChild(element);
        }
      }
    });
  },
};
const modifyObject = (string) => {
  task.text2 = string;
  task.checkText();
};
modifyObject("Ala ma kota!");
console.log(task);

// Zadanie 13:
const someWords = ["lorem", "ipsum", "dolor"];
const countLetters = (strings) => {
  const numbers = strings.map((string) => string.length);
  return numbers;
};
const getSum = (strings) => {
  const numbers = countLetters(strings);
  const sum = numbers.reduce((a, b) => a + b);
  return sum;
};
const getAverage = (strings) => {
  const sum = getSum(strings);
  const numbers = countLetters(strings);
  const average = sum / numbers.length;
  return average;
};
console.log(countLetters(someWords));
console.log(`Suma: ${getSum(someWords)}`);
console.log(`Średnia: ${getAverage(someWords)}`);

// Zadanie 14:
let human = {
  name: "",
  surname: "",
  age: "",
};
const modifyHuman = (name, surname, age) => {
  const initialHuman = { ...human };
  human.name = name;
  human.surname = surname;
  human.age = age;
  human.nameLength = name.length;
  human.surnameLength = surname.length;
  human.ageLength = age.length;
  Object.values(human).find((value) => {
    if (value.length > 5) {
      const btn = document.createElement("button");
      btn.textContent = "Wyczyść obiekt";
      btn.addEventListener("click", () => {
        human = initialHuman;
        console.log(human);
      });
      document.querySelector("#root").appendChild(btn);
    }
  });
};

modifyHuman("Foo", "Bar", "54");
console.log(human);
