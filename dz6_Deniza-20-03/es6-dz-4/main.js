const number = document.getElementById('number')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let count = 0;

plus.addEventListener('click', () => {
    incre()
})

const incre =()=>{
    count++;
    number.innerText = count
    number.style.color= 'green'
}


minus.addEventListener("click", () => {
    dicre()
})

const dicre= () => {
    if  (count > 0)
        count--;
    number.innerText = count
    number.style.color= 'red'
}


const x = document.getElementById('x')
const y = document.getElementById('y')
const num = document.getElementById('num')

num.addEventListener('mousemove',  event =>{
    let eventX = event.screenX
    let eventY = event.screenY

    x.innerText = eventX
    y.innerText = eventY
})
const Red = document.getElementById('Red')
const Stop = document.getElementById('Stop')
const Yellow = document.getElementById('Yellow')
const Wait = document.getElementById('Wait')
const Green = document.getElementById('Green')
const Go = document.getElementById('Go')

const svetafor = prompt('введите цвет')

if (svetafor === 'зеленый'){
    Green.style.background = 'green'
    Go.innerText = 'go'
}else if (svetafor === 'желтый'){
    Yellow.style.background = 'yellow'
    Wait.innerText = 'wait'
}if (svetafor === 'красный'){
    Red.style.background = 'red'
    Stop.innerText = 'stop'
}
