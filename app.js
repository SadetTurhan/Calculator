let result = [];
let operator = [];
let firstNumber = [];
let secondNumber = [];

function operatingNumbers(){
if(operator == "add"){
    let z = firstNumber + secondNumber
    result.push(z)
}else if(operator == "substract"){
    let z = x - y;
    result.push(z);
}else if(operator == "multiply"){
    let z = x * y;
    result.push(z);
}else if(operator == "divide"){
    let z = x / y;
    result.push(z);
}
};
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


let numberDisplay = document.querySelector(".displayArea");

let number1 = document.querySelector(".numberButton1");
number1.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
    secondNumber.push(1);
    numberDisplay.textContent = secondNumber}
    else{
    firstNumber.push(1);
    numberDisplay.textContent = firstNumber
    };
})
let number2 = document.querySelector(".numberButton2");
number2.addEventListener("click",function(){
        if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(2);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(2);
        numberDisplay.textContent = firstNumber
        };
});
let number3 = document.querySelector(".numberButton3");
number3.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
    secondNumber.push(3);
    numberDisplay.textContent = secondNumber}
    else{
    firstNumber.push(3);
    numberDisplay.textContent = firstNumber
    }});
let number4 = document.querySelector(".numberButton4");
number4.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(4);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(4);
        numberDisplay.textContent = firstNumber
        }
})
let number5 = document.querySelector(".numberButton5");
number5.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(5);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(5);
        numberDisplay.textContent = firstNumber
        }
})
let number6 = document.querySelector(".numberButton6");
number6.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(6);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(6);
        numberDisplay.textContent = firstNumber
        }
})
let number7 = document.querySelector(".numberButton7");
number7.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(7);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(7);
        numberDisplay.textContent = firstNumber
        }
})
let number8 = document.querySelector(".numberButton8");
number8.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(8);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(8);
        numberDisplay.textContent = firstNumber
        }
})
let number9 = document.querySelector(".numberButton9");
number9.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(9);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(9);
        numberDisplay.textContent = firstNumber
        }
});
let number0 = document.querySelector(".numberButton0");
number0.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        secondNumber.push(0);
        numberDisplay.textContent = secondNumber}
        else{
        firstNumber.push(0);
        numberDisplay.textContent = firstNumber
        }
});


let equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click",function(){
    operatingNumbers(firstNumber,secondNumber);
    numberDisplay.textContent = result;
})