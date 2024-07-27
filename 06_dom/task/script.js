// button clicked
document.querySelector('.check-btn').addEventListener('click', function () {
  alert("Button Clicked");
})

// change text content
document.querySelector('.paragraph-change-btn').addEventListener('click', function () {
  document.querySelector('.text').textContent = "Congrats! for chnaging the text."
})

// add, remove green background
document.querySelector('.toggle-bg-green').addEventListener('click', function () {
  document.querySelector('.text2').classList.toggle('bg-green')
})