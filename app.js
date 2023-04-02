//operators//
let operator = [];

const addButton = document.getElementById("add");
const substractButton = document.getElementById("substract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

//choosing operator//
addButton.addEventListener("click",function(){
    operator.pop();
    operator.push("add");
})
substractButton.addEventListener("click",function(){
    operator.pop();
    operator.push("substract");
})
multiplyButton.addEventListener("click",function(){
    operator.pop();
    operator.push("multiply");
})
divideButton.addEventListener("click",function(){
    operator.pop();
    operator.push("divide");
})

//Buttons part//
const num1 = document.getElementById("numberButton1");
const num2 = document.getElementById("numberButton2");
const num3 = document.getElementById("numberButton3");
const num4 = document.getElementById("numberButton4");
const num5 = document.getElementById("numberButton5");
const num6 = document.getElementById("numberButton6");
const num7 = document.getElementById("numberButton7");
const num8 = document.getElementById("numberButton8");
const num9 = document.getElementById("numberButton9");
const num0 = document.getElementById("numberButton0");
let displayArea = document.getElementById("secondNumber");
let upperArea = document.getElementById("firstNumber");
num1.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
    displayArea.textContent +=1}
    else{
    upperArea.textContent += 1;
    };
});
num2.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=2}
        else{
        upperArea.textContent += 2;
        };
})
num3.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=3}
        else{
        upperArea.textContent += 3;
        };
})
num4.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=4}
        else{
        upperArea.textContent += 4;
        };
})
num5.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=5}
        else{
        upperArea.textContent += 5;
        };
})
num6.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=6}
        else{
        upperArea.textContent += 6;
        };
})
num7.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=7}
        else{
        upperArea.textContent += 7;
        };
})
num8.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=8}
        else{
        upperArea.textContent += 8;
        };
})
num9.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=9}
        else{
        upperArea.textContent += 9;
        };
})
num0.addEventListener("click",function(){
    if(operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide"){
        displayArea.textContent +=0}
        else{
        upperArea.textContent += 0;
        };
})


//getting values//

var getDisplayArea = 0;
var getUpperArea = 0;
var result = 0;
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click",function(){
    getDisplayArea = parseInt(displayArea.textContent);
    getUpperArea = parseInt(upperArea.textContent);
    if(operator == "add"){
    result = getDisplayArea + getUpperArea;
    }else if(operator == "substract"){
    result = getUpperArea - getDisplayArea;
    }else if(operator == "multiply"){
    result = getDisplayArea * getUpperArea;
    }else if(operator == "divide"){
    result = getUpperArea / getDisplayArea;
    };
    upperArea.textContent = result;
    displayArea.textContent = "";
});



const clearButton = document.getElementById("clear");
clearButton.addEventListener("click",function(){
    getDisplayArea = 0;
    getUpperArea = 0;
        displayArea.textContent = "";
        upperArea.textContent = "";
    operator.pop();
    operator.push("clear");
});
