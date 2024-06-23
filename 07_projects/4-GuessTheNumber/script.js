const form = document.querySelector('form');
const userInput = document.querySelector('.guessField')
const submitBtn = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomNumber);

let prevGuess = [];
let leftGuess = 10;

form.addEventListener('click', function(e) {
  e.preventDefault(); // prevent derfault form action

  if (leftGuess <= 0) {
    lowOrHi.innerHTML = `Your Don't have any guess remain`
    return;
  }
  if (userGuess === '' || userGuess < 0 || userGuess > 0 || isNaN(userGuess)) {
    lowOrHi.innerHTML = `Give a valid guess`
    return;
  }

  const userGuess = parseInt(userInput.value);
  if (userGuess === randomNumber) {
    lowOrHi.innerHTML = `You guessed ${userGuess} Correct!`
    return;
  } else if (userGuess > randomNumber) {
    lowOrHi.innerHTML = `You guessed Higher!`
    prevGuess.push(userGuess);
    guessSlot.innerHTML = prevGuess;
    leftGuess--;
    reamining.innerHTML = leftGuess;
  } else {
    lowOrHi.innerHTML = `You guessed Lower!`
    prevGuess.push(userGuess);
    guessSlot.innerHTML = prevGuess;
    leftGuess--;
    reamining.innerHTML = leftGuess;
  }
});

