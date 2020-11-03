//Zadanie 1:
const checkEvent = (element, trigger) => element.addEventListener(trigger, (event) => console.log(event))

//1.
const btn = document.querySelector("#test-event");
checkEvent(btn, "click")

//2.
// checkEvent(window, "mousemove")

//3.
checkEvent(btn, "mouseover")

//4.
checkEvent(window, "keypress")

//5.
checkEvent(window, "scroll")

//6.
const testInput = document.querySelector("#input-test")
checkEvent(testInput, "input")


//Zadanie 2:
const forwardText = () => {
    const ex2 = document.querySelector("#ex2")
    const ex2Span = document.querySelector("#span-ex2")
    ex2.addEventListener("click", (event) => {
        ex2Span.innerText = event.target.dataset.text
    })
}
forwardText()

//Zadanie 3:
const toggleColor = () => {
    const square = document.querySelector("#ex3");
    square.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = "blue")
    square.addEventListener("mouseleave", (event) => event.target.style.backgroundColor = "red")
}
toggleColor()

//Zadanie 4:
const errSpan = document.querySelector("#ex3-err")
const validateInput = (event) => {
    const { value } = event.target
    if (/\d/.test(value)) errSpan.innerText = "W tym polu nie można wpisywać cyfr!"
    else errSpan.innerText = ""
}
testInput.addEventListener("input", validateInput)

//Zadanie 5:
let count = 0;
const countSpan = document.querySelector("#ex5 span");
const incBtn = document.querySelector("#ex5-button")
const increment = () => {
    count++;
    countSpan.innerText = count;
    if (count === 10)
        incBtn.removeEventListener("click", increment)
}
incBtn.addEventListener("click", increment)

//Zadanie 6:
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) body.style.backgroundColor = "red";
    else body.style.backgroundColor = "white"
})

//Zadanie 7:
let num1 = "";
let num2 = "";
let selectedOperation = "";
const display = document.querySelector("#calculator input");
const digits = document.querySelectorAll("#digits button");
const operations = document.querySelectorAll("#operations button");

digits.forEach((digit) => digit.addEventListener("click", (event) => {
    const { innerText } = event.target;

    if (selectedOperation) {
        num2 += innerText;
        display.value = num2;
    }
    else {
        num1 += innerText;
        display.value = num1;
    }
})
)

operations.forEach((operation) => operation.addEventListener("click", (event) => {
    const { innerText } = event.target;
    if (innerText !== "=") {
        selectedOperation = innerText;
        return;
    }

    switch (selectedOperation) {
        case "+":
            display.value = +num1 + +num2;
            break;
        case "-":
            display.value = +num1 - +num2;
            break;
        case "*":
            display.value = +num1 * +num2;
            break;
        case "/":
            display.value = +num1 / +num2;
            break;
        default:
            display.value = +num1;
    }
})
)

