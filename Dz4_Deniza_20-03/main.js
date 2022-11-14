const p = document.getElementById('plus')
const m = document.getElementById('minus')
const count = document.querySelector('.count')
let c = 0
p.addEventListener('click', ev => {
    c++
    count.style.color = 'green'
    count.innerHTML = c

})


m.addEventListener('click', function () {
    if (c > 0) {
        c--
        count.style.color ='red'
        count.innerHTML =c
    }

})
const kvadrat = document.getElementById('item')
const posX = document.getElementById('posX') // только 1 элемент
const posY = document.getElementById('posY')
kvadrat.addEventListener('mousemove', event => {
    let x = event.screenX
    let y = event.screenY
    posX.innerHTML = x
    posY.innerHTML = y
})

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')

let team = prompt('введите цвет светофора ').toUpperCase()

 if (team === 'КРАСНЫЙ' || team === 'RED') {
     red.style.backgroundColor = 'red'
     red.innerText = 'STOP'
 }
else if (team === 'ЖЕЛТЫЙ' || team === 'YELLOW') {
     yellow.style.backgroundColor = 'yellow'
     yellow.innerText = 'WAIT'
}
else if (team === 'ЗЕЛЕНЫЙ' || team === 'GREEN') {
    green.style.backgroundColor = 'green'
    green.innerText = 'GO'
}else alert('введите один из цветов выше перчисленных')
