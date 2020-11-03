//Zadanie 1:
//1.
console.log(document.querySelector("#buz").parentElement)
//2.
console.log(document.querySelector("#baz").previousElementSibling)
//3.
const foo = document.querySelector("#foo")
console.log(foo.children)
//4.
console.log(foo.parentElement)
//5.
console.log(foo.firstElementChild)
//6.
const childrenLength = foo.children.length
console.log(foo.children[Math.round(childrenLength / 2) - 1])

//Zadanie 2:
const addListener = (el) => el.addEventListener("click", (e) => {
    const descendants = e.target.querySelectorAll("div")
    const textDiv = [...descendants].find(d => !d.children.length && d.innerText)?.innerText

    console.log(textDiv)
})
const redButton = document.querySelector("#ex2")
addListener(redButton)

//Zadanie 3:
const addListenerForEach = (elements) => elements.forEach(el => el.addEventListener("click", (e) => {
    const targetSpan = e.target.nextElementSibling
    const currentDisplay = targetSpan.style.display;

    targetSpan.style.display = currentDisplay === "none" ? "inline" : "none"
}))

const exButtons = document.querySelectorAll("#ex3 button");
addListenerForEach(exButtons)

//Zadanie 4:
const changeParentColor = (elements) => elements.forEach(el => el.addEventListener("click", (e) => {
    e.target.parentElement.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}))
changeParentColor(exButtons)

//Zadanie 5:
const rectangles = document.querySelectorAll("#ex5 div");
const list = document.querySelector("#ex5 ul");
const listElements = document.querySelectorAll("#ex5 ul li")

rectangles.forEach(rect => rect.addEventListener("mouseover", (e) => {
    //1.
    listElements[0].style.backgroundColor = e.target.style.backgroundColor
    //2.
    listElements[listElements.length - 1].style.backgroundColor = e.target.style.backgroundColor
    //3.
    listElements.forEach((el, idx) => {
        if (idx % 2 === 1) el.style.backgroundColor = e.target.style.backgroundColor
    })
    //4.
    listElements.forEach((el, idx) => {
        if (idx % 2 === 0) el.style.backgroundColor = e.target.style.backgroundColor
    })
    //5.
    list.style.backgroundColor
}))

//Zadanie 6:
const div = document.querySelector("#ex6");

//1.
const first = div.firstElementChild.firstElementChild.firstElementChild
//2.
const second = div.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement
//3.
const third = div.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild