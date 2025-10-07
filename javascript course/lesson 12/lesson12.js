//12a
let add = function () {
    console.log(2 + 3);
}

add();

//12b

function Test () {
    console.log('12b');
}

function runTwice (fun) {
    fun();
    fun();
}

runTwice(Test);
runTwice(add);

//12c

let isShowing = false;
let isShowing2 = false;


function displayText () {
    let timeoutId;
    let startButton = document.querySelector('.js-start-button');
    if (!isShowing) {
        timeoutId = setTimeout(function() {
        startButton.innerHTML = "Finished!";
    }, 1000);
    startButton.innerHTML = "Loading..."
        isShowing = true;
    } else {
        startButton.innerHTML = "Start";
        clearTimeout(timeoutId);
        isShowing = false;
    }
}

function displayText2 () {
    let timeoutId2;
    let displayBox = document.querySelector('.js-display-box');
    displayBox.innerHTML = "Added";
    clearTimeout(timeoutId2);
    timeoutId2 = setTimeout(function() {
        displayBox.innerHTML = "";
    }, 2000);
}

let messages = 2;

let intervalId = setInterval(function() {
        if (document.title === 'App' && messages != 0) {
            document.title = `${messages} New messages`;
        } else {
            document.title = 'App';
        }
    }, 1000);

function decreaseMessages() {
    messages > 0 ? messages-- : undefined;
}


