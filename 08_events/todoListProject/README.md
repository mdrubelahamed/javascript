```javascript
const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');

form.addEventListener('click', function(e) {
  e.preventDefault();
}, false)

addButton = document.querySelector('#add-todo')
addButton.addEventListener('click', function(e) {
  const todoText = document.querySelector('#new-todo').value;
  // console.log(todoText);

  const li = document.createElement('li');
  let textNode = document.createTextNode(todoText)
  li.appendChild(textNode);

  todoList.appendChild(li)
  
}, false)


// strike through text
todoList.addEventListener('click', function(e){
  // console.log(e.target.tagName);
  if (e.target.tagName === 'LI') {
    let listItem = e.target;
    listItem.classList.toggle('strikethrough');
  }
}, false)
```

---
Want to finish this project
Share the project in twitter with like minded people :)
Sleep Well and Wake up to follow a better process
NOT A TASK : Focus on the process, result will take of itself
---

