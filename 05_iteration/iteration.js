// *** for of loop
// for in loop
// map set
// forEach loop
// higher order function
// callback function

// can we give another function in forEach loop

// element, index, arr

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
const obj = {
  name: "Mark",
  age: 21,
  email: "mark@facebook.com",
}
// for (const num of arr) {
//   console.log(num);
// }

// for (const key of obj) {
//   console.log(key); // TypeError: obj is not iterable
// }

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(`${key} - ${element}`);
//   }
// }

// for (const key in arr) {
//   if (Object.hasOwnProperty.call(arr, key)) {
//     const value = arr[key];
//     console.log(`Index of ${key} is ${value}`);
//   }
// }



const programming = ["javascript", "python", "ruby", "swift", "C++", "java"]
// programming.forEach(element => console.log(element));


// const arr1 = [
//   {
//     name: "Mark",
//     age: 21,
//   },
//   {
//     name: "Sam",
//     age: 25,
//   },
// ]

// arr1.forEach(element => {
//   console.log(element.name);
// });

const arr2 = [
  {
    id : 1,
    email: "rohan@hook.com",
    experience: 0,
    character: "Good",
  },
  {
    id : 2,
    email: "sahil@hook.com",
    experience: 1,
    character: "Bad",
  },
  {
    id : 3,
    email: "shuvam@hook.com",
    experience: 0,
    character: "Average",
  },
]

// arr2.forEach(item => {
//   const isTrue = item.email.includes("sonali")
//   if (isTrue) {
//   console.log(item.email)
//   }
//   else {
//   console.log(`User Email not Found`);
//   }
// });

// arr2.forEach(item => {
//   const email = item.email;
//   const experience = item.experience;
//   const experienceCandidate = [];
//   const freshers = [];
//   if (experience > 0) {
//     experienceCandidate.push(email);
//     console.log(`Experience Candidate: ${experienceCandidate}`);
//   }
//   else {
//     freshers.push(email);
//     console.log(`Freshers Candidate: ${freshers}`);
//   }
// })


const arr3 = ["iron man", "aqua man", "wonder womoan", "shaktiman", "hulk", "doctor strange", "Logical Thinking"]
for (const element of arr3) {
  // console.log(element);
}

for (const key in arr3) {
  if (Object.hasOwnProperty.call(arr3, key)) {
    const value = arr3[key];
    // console.log(`${key}: ${value}`);
  }
}

const twitterOwner = "Elon Musk"
for (const char of twitterOwner) {
  // console.log(char);
}