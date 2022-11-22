const array1 = ['eight', 'nine', 'ten'];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log('reversed:', reversed);

console.log('array1:', array1);



let massive
for (let i =0; i <= 10; i++) {
    massive.push(i)
}

console.log(massive)
for (let i =20; i >=0; i--){
    console.log(i)
}


let trafficlight = prompt("введите цвет светофора")
if (trafficlight === "зеленый") {
    alert("езжай")
}

if (trafficlight === "красный") {
    alert( "стоп")
}




const input = document.getElementById("input")
const createButton = document.getElementById("create_button")
const item_list = document.getElementById("smooth_list")

function createTodo (removefam) {
    if (input.value.trim () === ""){
        return false
    } else {
        const div = document. createElement("div")
        const text = document.createElement("h3")
        const button = document. createElement("button")
        const changeButton = document.createElement("button")
    }
    div.setAttribute("class","block_text")
    button.setAttribute("class" ,"delete")
    changeButton.setAttribute("class","Edit")
    changeTask = (button,textElement)=>{
        button.addEventListener("onclick,() => {")
        textElement.textContent = prompt();
    }
    text.innerText = input.value
    button.innerText = ("delete")
    removeTask(button)
    changeButton.textContent = "Edit";
    changeTask(changeButton, text);

    item_list.append(div)
    div.append(text)
    div.append(changeButton)

    {
        input.value = ""
    }
    removeTask = (button) =>{
        button.addEventListener("ONCLICK,(e) => {")
        todoList.removeChild(e.target.parentElement)
    }

}
createButton.addEventListener("onclick",createTodo)
input.addEventListener("keydown,e => e. keyCode === 13? createTodo(): false")

else if (trafficlight === "желтый") {
    alert("приготовиться")
}
else    {
    alert(" надо вести одну из перечисленых цветов: красный ,желтый , зеленый")
}


let  number = {
    num1: prompt("Введите число"),
    num2: prompt("Введите число")
}

let  result;
let math = prompt("math")
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









const p = document.getElementById('plus');
const m = document.getElementById('minus');
const count = document.querySelector('.count');
let c = 0;
p.addEventListener('click', ev => {
    c++;
    count.style.color = 'green';
    count.innerHTML = c;
});

m.addEventListener('click', function () {
    if (c > 0) {
        c--;
        count.style.color = 'red';
        count.innerHTML = c;
    }
});
const kvadrat = document.getElementById('item');
const posX = document.getElementById('posX'); // только 1 элемент
const posY = document.getElementById('posY');
kvadrat.addEventListener('mousemove', event => {
    let x = event.screenX;
    let y = event.screenY;
    posX.innerHTML = x;
    posY.innerHTML = y;
});

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

let team = prompt('введите цвет светофора ').toUpperCase();

if (team === 'КРАСНЫЙ' || team === 'RED') {
    red.style.backgroundColor = 'red';
    red.innerText = 'STOP';
} else if (team === 'ЖЕЛТЫЙ' || team === 'YELLOW') {
    yellow.style.backgroundColor = 'yellow';
    yellow.innerText = 'WAIT';
} else if (team === 'ЗЕЛЕНЫЙ' || team === 'GREEN') {
    green.style.backgroundColor = 'green';
    green.innerText = 'GO';
} else alert('введите один из цветов выше перчисленных');

