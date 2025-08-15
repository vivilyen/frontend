function subscribe () {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

let varCalculation = document.querySelector('.js-calculation');

function calcTotal () {
    const inputElement = document.querySelector('.js-input');
    let cost = Number(inputElement.value);
    if (cost > 0 && cost < 40) {
        cost+=10;
        varCalculation.innerHTML = `$${cost}`;
    } else if (cost > 40) {
        varCalculation.innerHTML = `$${cost}`;
    } else {
        varCalculation.innerHTML = '';
    }
}

function handleCostKeydown (event) {
    event.key === 'Enter' ? calcTotal() : undefined;
}