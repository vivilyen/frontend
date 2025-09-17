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
    varCalculation.classList.remove('is-wrong');
    const inputElement = document.querySelector('.js-input');
    let cost = Number(inputElement.value);
    if (cost >= 0 && cost < 40) {
        cost+=10;
        varCalculation.innerHTML = `$${cost}`;
    } else if (cost > 40) {
        varCalculation.innerHTML = `$${cost}`;
    } else if (cost < 0) {
        varCalculation.classList.add('is-wrong');
        varCalculation.innerHTML = 'Error: cost cannot be less than $0';
    }
}

function handleCostKeydown (event) {
    event.key === 'Enter' ? calcTotal() : undefined;
}