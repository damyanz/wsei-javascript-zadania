//Zadanie 1:
const lists = document.querySelectorAll(".list");

//Zadanie 2:
const getElementsByTag = (tagName) => document.getElementsByTagName(tagName);
const listItems = getElementsByTag("li")
console.log(listItems)

//Zadanie 3:
const list = document.querySelector("#list")

//Zadanie 4:
const showElements = (elements) => {
    elements.forEach(el => console.log(el))
}
showElements(document.querySelectorAll("li"))
showElements(document.querySelectorAll("ul"))
showElements(document.querySelectorAll("span"))
showElements(document.querySelectorAll("div.list span"))
showElements(document.querySelectorAll("div#spans span"))