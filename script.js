let num1 = "";
let num2 = "";
let operator = "";

let buttonZero = document.querySelector("#zero");
let buttonOne = document.querySelector("#one");
let buttonTwo = document.querySelector("#two");
let buttonThree = document.querySelector("#three");
let buttonFour = document.querySelector("#four");
let buttonFive = document.querySelector("#five");
let buttonSix = document.querySelector("#six");
let buttonSeven = document.querySelector("#seven");
let buttonEight = document.querySelector("#eight");
let buttonNine = document.querySelector("#nine");

let equals = document.querySelector("#equals");


let display = document.querySelector(".display");

let clear_button = document.querySelector("#clear");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let times = document.querySelector("#times");
let division = document.querySelector("#divide");

function add(num1,num2){
    let int_num = parseInt(num1) + parseInt(num2);
    return int_num.toString();
}

function subtract(num1,num2){
    let int_num = parseInt(num1) - parseInt(num2);
    return int_num.toString();
}

function multiply(num1,num2){
    let int_num = parseInt(num1) * parseInt(num2);
    return int_num.toString();
}

function divide(num1,num2) {
    return Math.floor(parseInt(num1)/parseInt(num2));
}

function clearDisplay(){
    if (display.textContent == "0"){
        display.textContent= '';
    }
}

function toDisplay(display_output){
    //let oldText = display.textContent;
    display.textContent = display_output;
    console.log(display.textContent);
}

buttonZero.addEventListener("click", () => {
    if (operator == '' && num1 !='0'){
        num1 = num1 + "0";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "0";
        toDisplay(num1+operator+num2);
    }
});

buttonOne.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "1";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "1";
        toDisplay(num1+operator+num2);
    }
    //console.log(num1);
});

buttonTwo.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "2";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "2";
        toDisplay(num1 + operator + num2);
    }
});

buttonThree.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "3";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "3";
        toDisplay(num1 + operator + num2);
    }
});

buttonFour.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "4";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "4";
        toDisplay(num1+operator+num2);
    }
});

buttonFive.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "5";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "5";
        toDisplay(num1+operator+num2);
    }
});

buttonSix.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "6";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "6";
        toDisplay(num1+operator+num2);
    }
});

buttonSeven.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "7";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "7";
        toDisplay(num1+operator+num2);
    }
});

buttonEight.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "8";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "8";
        toDisplay(num1+operator+num2);
    }
});

buttonNine.addEventListener("click", () => {
    if (operator == ''){
        num1 = num1 + "9";
        clearDisplay();
        toDisplay(num1);
    }
    else {
        num2+= "9";
        toDisplay(num1+operator+num2);
    }
});


plus.addEventListener("click", () => {
    if (operator == '') {
        operator = '+';
        display.textContent = display.textContent + ' ' + operator;
    } else {
        operate(num1,operator,num2);
        operator = '+';
        num1=display.textContent;
        display.textContent += operator;
        //num1 = multiply(num1,num2);
        //display.textContent= num1 + operator;
        num2='';
    }
});

minus.addEventListener("click", ()=> {
    if (operator == '') {
        operator = '-';
        display.textContent = display.textContent + ' ' + operator;
    } else {
        operate(num1,operator,num2);
        operator = '-';
        num1=display.textContent;
        display.textContent += operator;
        //num1 = multiply(num1,num2);
        //display.textContent= num1 + operator;
        num2='';
    }
   
});

times.addEventListener("click", ()=> {
    if (operator == '') {
        operator = '*';
        display.textContent = display.textContent + ' ' + operator;
    } else {
        operate(num1,operator,num2);
        operator = '*';
        num1=display.textContent;
        display.textContent += operator;
        //num1 = multiply(num1,num2);
        //display.textContent= num1 + operator;
        num2='';
    }
   
});

division.addEventListener("click", ()=> {
    if (operator == '') {
        operator = '/';
        display.textContent = display.textContent + ' ' + operator;
    } else {
        operate(num1,operator,num2);
        operator = '/';
        num1=display.textContent;
        display.textContent += operator;
        //num1 = multiply(num1,num2);
        //display.textContent= num1 + operator;
        num2='';
    }
   
});


function operate(num1, operator, num2){
    if (operator == '+'){
        toDisplay(add(num1,num2));
    } else if (operator == '-'){
        toDisplay(subtract(num1,num2));
    } else if (operator == '*'){
        toDisplay(multiply(num1,num2));
    }else if (operator == '/'){
        toDisplay(divide(num1,num2));
    }
}

equals.addEventListener("click", () => {
    operate(num1, operator, num2);
    num1 = display.textContent;
    num2 ='';
    operator='';
});

clear_button.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '0';
})