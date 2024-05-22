// Task: Write a function that takes an array of numbers as an input and returns the average of the numbers
function averageOfNumbers(numArray) {
  let sumOfNumbers = 0;
  for (let i = 0; i < numArray.length; i++) {
    sumOfNumbers += numArray[i]
  }
  return sumOfNumbers / numArray.length
}

const numArray = [1, 2, 3, 4, 5]
// console.log("Average of Numbers:", averageOfNumbers(numArray));


// Task: Write a function that takes a string as an input and returns the string with all vowels removed
const schoolName = "Kingston";

function removedVowels(str) {
  return str.replace(/[aeiou]/ig, ""); // i => check both UPPERCASE and lowercase, g => check all occurence not one time
}

// console.log(removedVowels(schoolName));


// Write a JavaScript function that takes an array of objects as an input, where each object has a name property, and returns an array of all the names
const newArray = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", occupation: "Engineer" },
  { id: 3, name: "Bob", age: 30, country: "USA" },
  { id: 4, name: "Alice", occupation: "Doctor" }
]

const property = "name";

// why (.) dot notation isn't working
// The reason is that getObject.property is trying to access a property named property on the object, not a property with the value of the property variable
// In other words, getObject.property is equivalent to getObject['property'], not getObject[property].

function filterSpecificGroup(newArray, property) {
  let resultArray = [];
  for (let i = 0; i < newArray.length; i++) {
    let getObject = newArray[i];
    if (getObject.hasOwnProperty(property)) {
      resultArray.push(getObject[property]);
    }
  }
  return resultArray;
}

// console.log(filterSpecificGroup(newArray, property));



// Write a JavaScript function that takes an array of objects as an input, where each object has a name and age property, and returns an array of all objects where the age is greater than 18

const people = [
  { name: "Alice", age: 25, hobby: "reading" },
  { name: "Bob", age: 30, hobby: "gaming" },
  { name: "Charlie", age: 22, hobby: "hiking" },
  { name: "Diana", age: 15, hobby: "photography" }
];

const ageProperty = "age";

function filterAdult(people, property) {
  const finalArray = [];
  for (let i = 0; i < people.length; i++) {
    let age = people[i][property];
    if (age > 18) {
      finalArray.push(people[i])
    }
  }
  return finalArray;
}

// console.log(filterAdult(people, ageProperty));



// console.log(addOne(3)); // it will work but check the next secnario
function addOne(num) {
  return num + 1;
}


// console.log(addTwo(3)); // error => ReferenceError: Cannot access 'addTwo' before initialization, because now the function is hold in a variable
const addTwo = function(num) {
  return num + 2;
}

