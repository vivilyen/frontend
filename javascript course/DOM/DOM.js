function subscribe () {
            const buttonElement = document.querySelector('.js-subscribe-button');

            buttonElement.innerText === 'Subscribe' ? 
                buttonElement.innerText = 'Subscribed' : buttonElement.innerText = 'Subscribe';
        }

        function calcTotal () {
            const inputElement = document.querySelector('.js-input');
            let cost = Number(inputElement.value);
            cost < 40 ? cost+=10 : undefined;
            document.querySelector('.js-calculation').innerHTML = `$${cost}`;
        }

        function handleCostKeydown (event) {
            event.key === 'Enter' ? calcTotal() : undefined;
        }