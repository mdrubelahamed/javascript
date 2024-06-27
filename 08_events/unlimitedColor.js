const body = document.querySelector('body');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

const randomColor = function() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeBgColor() {
  body.style.backgroundColor = randomColor();
}


let intervalId;

const startChangingColor = function() {
  // if !intervalId => intervalId === null
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function() {
  intervalId = clearInterval(intervalId);
  intervalId = null; // flashing out the code for better use of memory
};


// reference not execute
startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);