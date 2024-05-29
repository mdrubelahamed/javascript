// Guess the Number Game
function randomNumber() {
  const minValue = 1
  const maxValue = 100
  return Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue );
}

function guessNumber() {
  const randomNum = randomNumber();
  let maxGuesses = 5;
  let attempt = 0;
  while (attempt < maxGuesses) {
    let userGuess = parseInt(prompt("Guess the number between 1 to 100"))
    attempt++;
    if (userGuess === randomNum) {
      console.log(`Congratulations You guessed ${randomNum} correctly.`);
      return;
    }
    else if (userGuess > randomNum) {
      console.log("Too high, Try again.");
    }
    else {
      console.log("Too low, Try agin.");
    }
  }
}

// guessNumber();



// Create a small JavaScript project that generates a personalized greeting based on the time of day using the OR operator (||) in an if-else statement

function greeting() {
  const currentDay = new Date();
  const currentHours = currentDay.getHours();
  if (currentHours >=6 && currentHours <= 12) {
    console.log("Good morning!");
  }
  else if (currentHours > 12 && currentHours <= 18) {
    console.log("Good afternoon!");
  }
  else {
    console.log("Good evening!");
  }
}
// greeting();


// Eligibility Checker
// The function should check if a person is eligible for a certain program based on the following conditions:
// 1. The person must be at least 18 years old (age >= 18).
// 2. The person must be a citizen of either the USA or Canada (citizenship === 'USA' || citizenship === 'Canada').
// 3. The person's income must be either less than $30,000 or greater than $50,000 (income < 30000 || income > 50000).
// If the person meets all these conditions, the function should return true, indicating that they are eligible for the program. Otherwise, it should return false.

function checkEligibility(age, citizenship, income) {
  citizenship = citizenship.toLowerCase();
  if (age>= 18 && (citizenship === "usa" || citizenship == "canada") && (income < 30000 || income > 50000)) {
    return true;
  }
  return false;
}

const age = 22;
const citizenship = "USA";
const income = 100000;

// const isEligible = checkEligibility(age, citizenship, income);
// console.log(isEligible);



// *** SWITCH CASE ***
function selectFruit(fruit) {
  fruit = fruit.toLowerCase();
  switch(fruit) {
    case "apple":
      console.log("You selected an apple. Enjoy!");
      break;
    case "banana":
      console.log("You selected a banana. Yummy!");
      break;
    case "orange":
      console.log("You selected an orange. Refreshing!");
      break;

    default:
      console.log("Sorry, we don't have that fruit available.");
      break;
  }
}
const fruit = "orange"
selectFruit(fruit);


// falsy values -> false, 0, -0, "", BigInt, null, undefined, NaN
// other all values who are not falsy value are truthy values