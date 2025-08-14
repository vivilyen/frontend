const firstButtonElement = document.querySelector('.js-9a-button');
console.log(firstButtonElement);
const secondButtonElement = document.querySelector('.js-9b-button');
secondButtonElement.innerText = '9b done!';

function coinFlipper (coin) {
    document.querySelector('.js-coin-choice').innerHTML=`You chose: ${coin}`;
}


function submitButton () {
    let name = document.querySelector('.js-input').value;
    document.querySelector('.js-name').innerHTML = `Your name is: ${name}`;
}

function keyListener (event) {
    event.key === 'Enter' ? submitButton () : undefined;
}

function calcTotal () {
    const inputElement = document.querySelector('.js-input2');
    let cost = Number(inputElement.value);
    if ((cost % 1 !== 0) && (cost < 40)) {
        cost = ((cost*100)+1000)/100;
    } else if ((cost % 1 === 0) && (cost < 40)) {
        cost +=10;
    }
    document.querySelector('.js-calculation').innerHTML = `$${cost}`;
}

function handleCostKeydown (event) {
    event.key === 'Enter' ? calcTotal() : undefined;
}

function textShow () {
    let text = document.querySelector('.js-input3').value;
    document.querySelector('.js-text').innerHTML = `${text}`;
}
