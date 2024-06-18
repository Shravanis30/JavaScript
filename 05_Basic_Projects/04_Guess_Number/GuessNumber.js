let RandomNumber = parseInt(Math.random()* 100 + 1);
console.log(RandomNumber);

const UserInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#submtButton');
const BeforeInputs = document.querySelector('#guesses');
const AttemptLefts = document.querySelector('#attempt');
const statementLH = document.querySelector('#loworhigh');
const StartOver = document.querySelector('.output');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(UserInput.value);
        // console
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    // weather the input is right or wrong
    if (isNaN(guess)) {
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter the number less than 100')
    } else {
        prevGuess.push(guess);
        if (numGuess <= 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${RandomNumber}`);
            endGame();
        } else {
            displayGuess();
            checkGuess();
        }
    }

}

function checkGuess(guess) {
    // to print the message as per the input given by the user
    if (guess === RandomNumber) {
        displayMessage(`You guessed it right`);
    }
    else if (guess < RandomNumber) {
        displayMessage(`Number is TOOOO low`);
    } else if (guess > RandomNumber) {
        displayMessage(`Number is TOOOO high`);
    }
}

function displayGuess(guess) {
    //clean value ani update all categories
    UserInput.value = '';
    BeforeInputs.innerHTML += `${guess}, `;
    numGuess++;
    AttemptLefts.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    // DOM manipulation of the game
    statementLH.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    UserInput.value = '';
    UserInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', function (event) {
        RandomNumber = parseInt(Math.random()* 100 + 1);
        prevGuess = [];
        numGuess = 1;
        BeforeInputs.innerHTML = '';
        AttemptLefts.innerHTML = `${11 - numGuess}`;
        UserInput.removeAttribute('disabled');
        statementLH.innerHTML = '';
        StartOver.removeChild(p);
        playGame = true;
    })
}
