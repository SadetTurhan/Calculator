let result = [];
let operator = [];
let firstNumber = [];
let secondNumber = [];

function add(x,y){
    let z = x + y;
    result.push(z);
}

function substract(x,y){
    let z = x - y;
    result.push(z);
}

function multiply(x,y){
    let z = x * y;
    result.push(z);
}

function divide(x,y){
    let z = x / y;
    result.push(z);
}

function chooseAdd(){
    let pushAdd = "add";
    operator.pop();
    operator.push(pushAdd);
}
function chooseSubstract(){
    let pushSubstract = "substract";
    operator.pop();
    operator.push(pushSubstract);
}
function chooseMultiply(){
    let pushMultiply = "multiply";
    operator.pop();
    operator.push(pushMultiply);
}
function chooseDivide(){
    let pushDivide = "divide";
    operator.pop();
    operator.push(pushDivide);
}

let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
addButton.addEventListener("click",chooseAdd);
substractButton.addEventListener("click",chooseSubstract);
multiplyButton.addEventListener("click",chooseMultiply);
divideButton.addEventListener("click",chooseDivide);


console.log(multiply(25,6));