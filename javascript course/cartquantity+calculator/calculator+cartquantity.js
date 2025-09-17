let calculation=localStorage.getItem('calc') || '';
let quantity=JSON.parse(localStorage.getItem('quantity')) || 0;
let currentQuantity = document.querySelector('.js-current-quantity');
let displayCalculation = document.querySelector('.js-display-calculation');

showCalculation();
showQuantity();


function updateCalculation (button) {
    calculation+=`${button}`;
    console.log(calculation);
    displayCalculation.innerHTML = calculation;
    localStorage.setItem('calc', calculation);
}

function updateCartQuantity (operator, num) {
    if (quantity >= 10 && operator === '+') {
        return alert('Cart is full.');
    } else if (quantity <= 0 && operator === '-') {
        return alert('Cart is empty.');
    } else if (operator==='+') {
        quantity+=num;
        showQuantity();
        localStorage.setItem('quantity', JSON.stringify(quantity));
        return console.log(`Cart quantity: ${quantity}`)
    } else if (operator==='-') {
        quantity-=num;
        showQuantity();
        localStorage.setItem('quantity', JSON.stringify(quantity));
        return console.log(`Cart quantity: ${quantity}`)
    }
}

function showQuantity () {
    currentQuantity.innerText = `Cart quantity: ${quantity}`;
}

function showCalculation () {
    !(eval(calculation))? displayCalculation.innerHTML = '' : displayCalculation.innerHTML = `${calculation} = ${eval(calculation)}`;
}