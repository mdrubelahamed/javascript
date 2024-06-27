const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
const addButton = document.querySelector('#add-todo');
const todoInput = document.querySelector('#new-todo');

addButton.addEventListener('click', function(e) {
  e.preventDefault();
  let todoText = document.querySelector('#new-todo').value;

  // crate list item
  const li = document.createElement('li');
  let textNode = document.createTextNode(todoText)
  li.appendChild(textNode);

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.id = 'deleteButton';
  li.appendChild(deleteButton);

  todoList.appendChild(li);

  // Add event listener to delete button
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  // 
  todoInput.value = '';
}, false)

todoList.addEventListener('click', function(e){
  if (e.target.tagName === 'LI') {
    let listItem = e.target;
    listItem.classList.toggle('strikethrough');
  }
}, false)