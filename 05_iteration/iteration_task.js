// /* Project 1: Analyzing Inventory Data
// Imagine you work for an e-commerce company that needs to analyze its inventory data. You have an array of objects representing different products, each with properties like name, price, quantity, and category. Your task is to write a program that performs various operations on this data using the appropriate loop.
// Requirements:
// Calculate the total value of the inventory (price * quantity) for each category
// Find the product with the highest price in each category.
// Generate a report of products with low stock (quantity < 10) 
// */

const inventory = [
  {
    name: "Product A",
    price: 25.99,
    quantity: 50,
    category: "Electronics"
  },
  {
    name: "Product B",
    price: 15.99,
    quantity: 30,
    category: "Electronics"
  },
  {
    name: "Product C",
    price: 9.99,
    quantity: 100,
    category: "Clothing"
  },
  {
    name: "Product D",
    price: 19.99,
    quantity: 20,
    category: "Clothing"
  },
  {
    name: "Product E",
    price: 49.99,
    quantity: 10,
    category: "Furniture"
  },
  {
    name: "Product F",
    price: 29.99,
    quantity: 15,
    category: "Furniture"
  },
  {
    name: "Product G",
    price: 7.99,
    quantity: 80,
    category: "Accessories"
  },
  {
    name: "Product H",
    price: 12.99,
    quantity: 40,
    category: "Accessories"
  }
];

function calculateTotalValueByCategory(inventory) {
  const totalValueByCategory = {};
  inventory.forEach(item => {
    const price = item.price;
    const quantity = item.quantity;
    const category = item.category;

    const totalValue = (price * quantity) // toFixed return string

    if (totalValueByCategory[category]) {
      totalValueByCategory[category] += totalValue;
    }
    else {
      totalValueByCategory[category] = totalValue;
    }
  })
  return totalValueByCategory;
}

// const totalValueByCategory = calculateTotalValueByCategory(inventory);
// console.log(totalValueByCategory);


/*
if you want to get those values in 2 decimal points
```
const totalValue = (price * quantity).toFixed(2); // <--- added toFixed(2)

if (totalValueByCategory[category]) {
  totalValueByCategory[category] = (parseFloat(totalValueByCategory[category]) + parseFloat(totalValue)).toFixed(2);
}
else {
  totalValueByCategory[category] = totalValue;
}
```
*/


//////////////////////////////////////////////////////////////////

// Create a JavaScript program that uses a for...of loop to iterate over the key-value pairs of an object
// const person = {
//   name: "Peter Thiel",
//   age: 59,
//   city: "Silicon Valley",
//   country: "USA",
// }

// syntax => Object.entries(obj)
// for (const [key, value] of Object.entries(person)) {
//   // console.log(`${key}: ${value}`);
// }

// Create a JavaScript program that uses a for...of loop to iterate over the elements of a 2D array (matrix)
const matrix = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11]
];

for (const row of matrix) {
  for (const value of row) {
    // console.log(value);
  }
}

// Create a JavaScript program that uses a for...of loop to count the number of vowels in a given string
const text = "The quick brown fox jumps over the lazy dog.";

function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";

  for (const char of text) {
    if (vowels.includes(char)) {
      count ++;
    }
  }
  return count;
}

// console.log(countVowels(text));

function reverseString(text) {
  let reverseText = "";
  for (const char of text) {
    reverseText = char + reverseText;
  }
  return reverseText;
}

// console.log(reverseString(text));


const person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  city: "New York"
};

function findKeyAndValue(person) {
  for (const key in person) {
    const value = person[key];
    console.log(`${key}: ${value}`);
  }
};
// findKeyAndValue(person);

const mixedObject = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  city: "New York",
  isAdmin: true,
  hobbies: ["reading", "coding", "gaming"]
};

function countStringValue(mixedObject) {
  let count = 0;
  for (const key in mixedObject) {
    let value = mixedObject[key];
    if (typeof value == 'string') {
      count++;
    }
  }
  return count;
}

// console.log(countStringValue(mixedObject));

const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 92 },
  { name: "Bob", grade: 78 },
  { name: "Alice", grade: 95 },
  { name: "Mike", grade: 88 }
];

function higherGradeStudent(students) {
  let topStudents = [];
  students.forEach(obj => {
    let grade = obj.grade;
    if (grade >= 90) {
      topStudents.push(obj);
    }
  })
  return topStudents;
}

// console.log(higherGradeStudent(students));

const students2 = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 92 },
  { name: "Bob", grade: 78 },
  { name: "Alice", grade: 95 },
  { name: "Mike", grade: 88 }
];

// function avgGradeOfStudents(students2) {
//   const initalValue = 0;
//   let totalGrade = 0;
//   students2.forEach(obj => {
//     let grade = obj.grade;
//     totalGrade += grade;
//   })
//   return totalGrade / students2.length;
// }

function avgGradeOfStudents(students2) {
  return students2.reduce((acc, obj) => acc + obj.grade, 0) / students2.length;
}
console.log(avgGradeOfStudents(students2));