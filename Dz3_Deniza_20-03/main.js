
var number = {
    num1: prompt("Введите число"),
    num2: prompt("Введите число")
}

var result;
var math = prompt("math")
switch (number , math){
    case "+":
        result = number.num1 + number.num2
        console.log(result)
        break;
    case "-":
        result = number.num1 - number.num2
        console.log(result)
        break;
    case "*":
        result = number.num1 * number.num2
        console.log(result)
        break;
    case "/":
        result = number.num1 / number.num2
        console.log(result)
        break;
}


function numbers (num1,num2){
    console.log(Math.min(num1,num2))
}
let number = {
    num1: prompt("Введите число"),
    num2: prompt("Введите число")
}
numbers(number.num1,number.num2)
function textLength (){
 const num = prompt("Введите текст")
 console.log(num.length)
}
textLength()
