let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

document.querySelector('.js-points').innerHTML =`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

let result;
let isAutoPlaying = false;
let intervalId;

function autoPlay () {
    if (!isAutoPlaying) {
        intervalId = setInterval(function() {
            const playerMove = pickComputerMove();
            pickMove(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function pickComputerMove () {
    let random_num = Math.random();
    if (random_num >= 0 && random_num < 1/3 ){
        return 'rock';
    } else if (random_num >= 1/3 && random_num < 2/3) {
        return 'paper';
    } else if (random_num >= 2/3 && random_num < 1) {
       return 'scissors';
    }
}

function pickMove (user_pick) {
    const computer_pick = pickComputerMove();
    if (user_pick === computer_pick) {
        score.ties += 1;
        result = 'Tie.';
    } else if (user_pick === 'rock' && computer_pick === 'scissors' || user_pick === 'paper' && computer_pick === 'rock' || user_pick === 'scissors' && computer_pick === 'paper') {
        score.wins += 1;
        result = 'You win.';
    } else {
        score.losses += 1;
        result = 'You lose.';
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML =`${result}`;
    document.querySelector('.js-pick').innerHTML = `You ${picstoPicks(user_pick)} ${picstoPicks(computer_pick)} Computer`;
    document.querySelector('.js-points').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

    user_pick = '';
    result = '';
}

function picstoPicks (pick) {
    if (pick === 'rock') {
        return '<img class="choice-pic" src="images/rock-emoji.png">';
    } else if (pick === 'paper') {
        return '<img class="choice-pic" src="images/paper-emoji.png">';
    } else if (pick === 'scissors') {
    return '<img class="choice-pic" src="images/scissors-emoji.png">';
    }
}

function resetButton () {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML ='';
    document.querySelector('.js-pick').innerHTML = '';
    document.querySelector('.js-points').innerText =`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}