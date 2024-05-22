//  Testing code here

// ************* Data Types ***********
// 1. string, 2. number, 3. boolean, 4. bigint, 5. null, 6. undefined, 7. array, 8. object, 9. function
// const declearation must be initialized, that's why the undefined value is in let keyword
const greet = "Hello JS"; //string
const randomNumber = 123; //number
const isCoding = true; // boolean
const randomBigIntNumber = BigInt(1234567890123456789012345678901234567890) // BigInt
const weatherTemp = null; // null
let wanders; // undefined

// console.log(typeof greet, typeof randomBigIntNumber);
// console.table([typeof greet, typeof randomNumber, typeof isCoding, typeof randomBigIntNumber, typeof weatherTemp, typeof wanders]) 
// null datatype => 'object'


const myArray = [1, 2, 3, 4, 5, "hello", function() {
  return "Welcome";
}, user1 = {
  userId: "mark123",
  fullName: "Mark Zuckerberg",
  age: 21,
  email: "mark@facebook.com",
}]

// inside an array we can give any typeof values as an element
// console.log(myArray); 
// console.log(typeof myArray); // typeof array => object


function averageOfNumbers(myArray) {
  let sumOfAllNumbers = null;
  let lengthOfNumbers = null;
  for(let i = 0; i < myArray.length; i++) {
    if(typeof myArray[i] === 'number') {
      sumOfAllNumbers += myArray[i];
      lengthOfNumbers += 1;
    }
  }
  return sumOfAllNumbers / lengthOfNumbers;
}

// console.log(averageOfNumbers(myArray));


// object

const employee1 = {
  id: "em1",
  personalDetails: {
    name: "Sam Altman",
    age: 33,
    email: "sam@openai.com",
    address: {
      country: "USA",
      state: "Silicon Valley",
      city: "NYC",
      zipcode: 442466,
    }
  },
  professionalDetails: {
    categoryOfWork: "Technoloy",
    experience: "10+ Years of experience",
    achievements: ["Ycombinator", "Reddit", "Openai"],
    goals: "Create AGI",
  }
}

// console.log(employee1.professionalDetails.achievements);


// const obj = {
//   username: "Mark",
//   age: 30,
//   email: "mark@fackebook.com",
//   welcomeMessage: function() {
//     return `${this.username}, Welcome to my website`;
//   }
// }

const obj = {
  username: "Mark",
  age: 30,
  email: "mark@fackebook.com",
  welcomeMessage: () => `${this.username}, Welcome to my website`,
}

// console.log(obj.welcomeMessage())
// obj.username = "Sam"
// console.log(obj.welcomeMessage())




// ************ array *************
const arr1 = new Array(1, 2, 3, 4, 5);
// arr1.push(5)
// console.log(arr1);
// arr1.pop()
// console.log(arr1);
// arr1.shift() // remove the first element
// arr1.unshift(22) // add the element as a first element in an array

// const sliceArr1 = arr1.splice(0, 3)
// console.log(sliceArr1);
// console.log(arr1);

const arr4 = [1,3,4]
const arr2 = ['a', 'b', 'c']
// const arr3 = arr1 + arr2
// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// console.log([...arr1, ...arr2]); // spread

const nestedArr = [1, 2, 3, ['a', 'b', [4, 5, 6, ['aa', 'bb', [7, 8], ['aaa', 'bbb', [9, 0], ['abc']]]]]]
const flatArr = nestedArr.flat(Infinity); // infinity => it will go all the depth, u can customize how many nested array you want to flat
// console.log(flatArr);

const anotherArray1 = [1, 2, 3, 4]

// ******************** Date *************************
// const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));


// const anotherDate = Date.now();
// console.log(Math.floor(anotherDate / (1000 * 60 * 60 * 24)));


// Write a JavaScript function that takes two Date objects as input and returns the difference between them in days.
// Example input: date1 = new Date("2022-01-01"); date2 = new Date("2022-01-15");
// Expected output: 14 (days

const date1 = new Date("2022-01-01");
const date2 = new Date("2022-01-15");

// function differentBetweenTwoDays(date1, date2) {
//   return Math.floor((date2 - date1) / (1000 * 3600 * 24));
// }

// const diffBetweenTwoDays = (date1, date2) => Math.floor((date2 - date1) / (1000 * 3600 * 24));
// console.log(diffBetweenTwoDays(date1, date2));


// Write a JavaScript function that returns the current date and time in the format "YYYY-MM-DD HH:MM:SS"
// Example output: "2023-07-25 14:30:00"

function getDate1(taskDate) {
  let year = taskDate.getFullYear();
  let month = taskDate.getMonth() + 1;
  let day = taskDate.getDate();
  let hour = taskDate.getHours();
  let minute = taskDate.getMinutes();
  let second = taskDate.getSeconds();
  return `Current Date: ${year}-${month}-${day}\nCurrent Time: ${hour}:${minute}:${second}`
}

const specificDate = new Date();
// console.log(getDate1(specificDate));


// *************** hasOwnProperty() ******************
// Create an object person with properties name, age, and  occupation. Use hasOwnProperty() to check if the object has a property called address. If it doesn't, add it to the object

const person = {
  name: "Sam",
  age: 39,
  occupation: "CEO of Openai",
}

const person2 = {
  name: "Sam",
  age: 39,
  occupation: "CEO of Openai",
  address: "NYC",
}

// syntax => objectName.hasOwnProperty("propertyName");

function addAddressIfNotPresent(obj) {
  if (!(obj.hasOwnProperty("address"))){
    obj.address = "Silicon Valley"
  }
  return obj.address;
}
// console.log(addAddressIfNotPresent(person));

// task 2
// Create an object animal with a property sound. Create another object dog that inherits from animal using the Object.create() method. Add a property breed to dog. Use hasOwnProperty() to check if dog has its own property sound. What is the output?

function objInheritence() {
  const animal = {
    sound: "Huuuu",
  }
  const dog = Object.create(animal);

  if (dog.sound) {
    console.log("Sound property is present in dog obj");
  }
  else {
    console.log("Sound property isn't present in dog obj");
  }
}
// objInheritence();


// task 3 => Create an object book with properties title, author, and pages. Use hasOwnProperty() to check if the object has a property called publisher. If it doesn't, add it to the object. Then, use hasOwnProperty() again to check if the object has a property called publisher

const book = {
  title: "Deep Work",
  author: "Cal Newport",
  pages: 263,
}

function checkPropertyInBook(book) {
  if (!book.hasOwnProperty("publisher")) {
    book.publisher = "PIATKUS"
  }
  return book.hasOwnProperty("publisher") ? true : false;
}

// console.log(checkPropertyInBook(book));




function checkOwnProperty(obj, propertyName) {
  return obj.hasOwnProperty.call(obj, propertyName)
}

const obj1 = { a: 1, b: 2 };
// console.log(checkOwnProperty(obj1, 'a')); // true
// console.log(checkOwnProperty(obj1, 'c')); // false

const obj2 = Object.create({ a: 1 });
// console.log(checkOwnProperty(obj2, 'a')); // false, because in an inhereit property not his own property



// ****************** iife ****************

// const sum = (function addNubers(a, b) {
//   return a + b;
// })(2, 3)

// console.log(sum);


// arrow iife
const subtract = ((a, b) => a - b)(3, 2)
// console.log(subtract);
