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