const clock = document.getElementById('clock');

function updateClock() {
  const date = new Date();
  
  // add the time in the clock div
  clock.innerHTML = date.toLocaleTimeString();
}

// repeats a specified function at every given time interval
// setInterval(function, milliseconds);
setInterval(updateClock, 1000)