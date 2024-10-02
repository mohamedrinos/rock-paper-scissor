var score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

updateSCore();

function pickComputerMove() {
    var randomNumber = Math.random();
    var computerMove = ('');

    if (randomNumber > 0 && randomNumber < 1/3) {
        computerMove = ('rock');
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = ('paper');
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = ('scissors');
    }

    return computerMove;
}

function playGame(playerMove) {
    var computerMove = pickComputerMove();

    var result = ('');

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = ('Tie.');
        } else if (computerMove === 'paper') {
            result = ('You lose.');
        } else if (computerMove === 'scissors') {
            result = ('You win.');
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = ('You win.');
        } else if (computerMove === 'paper') {
            result = ('Tie.');
        } else if (computerMove === 'scissors') {
            result = ('You lose.');
        }
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = ('You lose.');
        } else if (computerMove === 'paper') {
            result = ('You win.');
        } else if (computerMove === 'scissors') {
            result = ('Tie.');
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.loses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateSCore();

    document.querySelector('.js-result').innerHTML = `${result}`
    document.querySelector('.js-choice').innerHTML = `You <img src="${playerMove}-emoji.png" class="move-image"> - <img src="${computerMove}-emoji.png" class="move-image"> Computer`
}

function updateSCore() {
    var scoreView = document.querySelector('.js-score');
    scoreView.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`
}