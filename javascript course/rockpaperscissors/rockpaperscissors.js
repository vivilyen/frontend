let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
document.querySelector('.js-result').innerHTML =`<p>Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}</p>`;
let user_pick;
let result;
function pickMove () {
    let random_num = Math.random();
    let computer_pick = '';

    console.log(user_pick);

    if (random_num >= 0 && random_num < 1/3 ){
        computer_pick = 'rock';
    } else if (random_num >= 1/3 && random_num < 2/3) {
        computer_pick = 'paper';
    } else if (random_num >= 2/3 && random_num < 1) {
        computer_pick = 'scissors';
    }

    console.log(computer_pick);

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

    document.querySelector('.js-result').innerHTML =
    `<p>${result}</p>
    <p>You ${user_pick} - ${computer_pick} Computer</p>
    <p>Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}</p>`;

    user_pick = '';
    result = '';
}

function resetButton () {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML =`<p>Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}</p>`;
}