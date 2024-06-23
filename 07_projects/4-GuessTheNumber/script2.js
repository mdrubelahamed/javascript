const randomNumber = parseInt(Math.random() * 100 + 1); // 1 to 100

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;
let playGame = true;
let guessChance = 10;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // check the guess no is between 1 to 100 or not
  if (isNaN(guess)) {
    alert(`Please enter a valid number.`);
  } else if (guess < 1) {
    alert(`Please enter a number more than or equal to 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than equal to 100`);
  } else {
    prevGuess.push(guess);
    if (numOfGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game over, Random Number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check the guess is matches with the random no or not
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is too high`);
  }
}

function displayGuess(guess) {
  // clear value and update array and update remaining guesses
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numOfGuess++;
  remaining.innerHTML = `${guessChance - numOfGuess}`;
}

function displayMessage(message) {
  // display the guessing message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // 
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  startOver.appendChild()
}

function newGame() {
  //
}
