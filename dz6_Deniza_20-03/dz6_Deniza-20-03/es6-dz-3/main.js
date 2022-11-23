// Kalkulator
let num1;
let num2;

let out = document.getElementById('out');

const plus= () =>  {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 + num2;
}

const minus= () => {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 - num2;
}

const multiplication= () => {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)
    out.innerHTML = num1 * num2;
}

const division= () => {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 / num2;
}



