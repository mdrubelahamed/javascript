// Two ways to declear object => 1. Literal 2. Constructor

const mySymbol = Symbol("key1");

const myObject = {
  name: "Rubel",
  [mySymbol] : "myKey1", // take symbol as key for an object
  "full name": "Md Rubel Ahamed",
  age: 21,
  email: "example@gmail.com",
  isLoggedIn: false,
  loginDays: ["Monday", "Friday"],
}

// console.log(myObject.name); // use (.)
// console.log(myObject["full name"]); // use brackets

// console.log(myObject);
// console.log(myObject[mySymbol]); // we can access symbol only using square brackets not (.)
// how to access object values 

// myObject.email = "hellojs.google.com"
// console.log(myObject.email);



// Object.freeze(myObject) // we can freeze the entire object
// myObject.email = "hellojs.microsoft.com"
// console.log(myObject.email);


// how to declear function in object
myObject.greet = function() {
  console.log("Hello JS User.");
}

// console.log(myObject.greet());

// use this keyword
myObject.greetWithName = function() {
  return `Hello ${this.name}, welcome to JS`;
}

// console.log(myObject.greetWithName());
// console.log(myObject);




// ********************** Task **********************

const person = {
  name: "Anant",
  age: 23,
  occupation: "Running a Firm",
}

const keySymbol = Symbol("key")
const urlSymbol = Symbol("url")

const config = {
  [urlSymbol]: "apiUrl",
  [keySymbol]: "apiKey"
}


// Create an object user with the following properties:

// username: a string
// email: a string
// address: an object with properties street, city, and state

const user = {
  username: "@technerd",
  email: "practice.technerd@mail.com",
  address: {
    street: "NH 21",
    city: "New York",
    state: "Texas",
  }
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.address.street);
// console.log(user["address"]["street"]);

const calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
}

// console.log(calculator.add(3, 2));
// console.log(calculator.subtract(3, 2));

const toDoList = {
  tasks: [
    {id: 1, title: "Deep Work", completed: false},
    {id: 2, title: "Hyper Focus", completed: false},
    {id: 3, title: "Atomic Habits", completed: true},
    {id: 4, title: "Zero To One", completed: false},
  ],

  addTask: function(addingTask) {
    toDoList.tasks.push(addingTask);
  },

  removeTask: function(id) {
    toDoList.tasks = toDoList.tasks.filter(task => task.id !== id);
  },

  // toggleCompleted: function(id) {
  //   const particularTask = toDoList.tasks[id - 1] // because in array index start from 0, (+1 value will access by default so that's why -1
  //   const completedValue = particularTask.completed
  //   if (completedValue) {
  //     particularTask.completed = false
  //   }
  //   else {
  //     particularTask.completed = true;
  //   }
  // }

  // another way to write toggleCompleted function
  toggleCompleted: function(id) {
    const foundTask = toDoList.tasks.find(task => task.id === id);
    if (foundTask) {
      foundTask.completed = (!foundTask.completed)
    }
  }
}

const addingTask = {id: 5, title: "HELLO WORLD", completed: false}
toDoList.addTask(addingTask);
// console.log(toDoList);
toDoList.removeTask(5)
// console.log(toDoList);

// console.log(toDoList.toggleCompleted(3));
// console.log(toDoList);


// ******
// another way of toggling boolean value
// foundTask.completed ^= true; // here it's bitwise XOR operator