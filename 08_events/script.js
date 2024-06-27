// document.querySelector('#images').addEventListener('click', function(e) {
//   console.log('clicked inside the url');
// }, false)

// document.querySelector('#owl').addEventListener('click', function(e) {
//   console.log('Owl Clicked');  
//   e.stopPropagation();
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
  // console.log(e.target.id);

  if (e.target.tagName === 'IMG') {
    removeIt = e.target.parentNode;
    removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt);
  }
}, false)

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2) {
//   let total = num1 + num2
//   return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)