let massive
for (var i =0; i <= 10; i++) {
   massive.push(i)
}

console.log(massive)
for (var i =20; i >=0; i--){
    console.log(i)
}


var trafficlight = prompt("введите цвет светофора")
if (trafficlight === "зеленый") {
    alert("езжай")
}

if (trafficlight === "красный") {
    alert( "стоп")
}

else if (trafficlight === "желтый") {
    alert("приготовиться")
}
else    {
    alert(" надо вести одну из перечисленых цветов: красный ,желтый , зеленый")
}