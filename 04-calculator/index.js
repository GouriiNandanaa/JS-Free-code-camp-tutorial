let var1 = 40;
let var2 = 50;

let result;

document.getElementById("num1-el").textContent = var1;
document.getElementById("num2-el").textContent = var2;

var sumEL = document.getElementById("result-el");   

function add(){
    sumEL.textContent = `Sum is : ${var1 + var2}`;
}

function sub(){
    sumEL.textContent = `Sum is : ${var1 - var2}`;
}

function mul(){
    sumEL.textContent = `Sum is : ${var1 * var2}`;
}

function div(){  
    sumEL.textContent = `Sum is : ${var1 / var2}`;
}

   