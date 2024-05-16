// ***************** Number *****************
const score = 999
// console.log(score);

const balance = new Number(100);
// console.log(typeof(balance));
// console.log(balance);
// console.log(balance.toExponential(1));

// const anotherBalance = balance.toLocaleString()
// console.log(anotherBalance);
// console.log(typeof(anotherBalance));

// const anotherBalance2 = balance.toString()
// console.log(anotherBalance2);
// console.log(typeof(anotherBalance2));


// const moneyLeft = 195.44645;
// console.log(moneyLeft.toFixed(2));
// console.log(balance.toFixed(2));

const otherNumber = 124.26545;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toFixed(0));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // abs => negative(-) to positive(+) values but not vice-versa
// console.log(Math.round(4.5)); // round => .5 or higher = round of to the next intger no
// console.log(Math.ceil(4.0001)); // ceil => round to the next int even (int.something =>next int) in that case
// console.log(Math.floor(4.9)); // floor => always to the lower value like here it will be 4 not 5, opposite of ceil
// console.log(Math.sqrt(49));
// console.log(Math.pow(2,4));
// console.log(Math.min(2,4,5,6,1,43));
// console.log(Math.max(2,4,5,6,1,43));

// console.log(Math.random());

// dice 1,6
const min = 1
const max = 6

const finalValue = Math.floor((Math.random() * (max - min + 1)) + min);
// Math.floor => for round of the value
// Math.random => for getting a value between 0 to 1
// (max - min + 1) => +1 so i don't get 0, it's actually give me value up to to (max-1) value
// at the end +min => so the random value start from the minimum value  
// console.log(finalValue);


// Write a function calculateCircleArea(radius) that takes a radius as an argument and returns the area of the circle. Use the formula A = πr^2 where A is the area and r is the radius.
function calculateCircleArea(radius) {
  const PI = 3.14;
  return PI * (Math.pow(radius, 2));
}

// console.log(calculateCircleArea(5));

// Write a function average(numbers) that takes an array of numbers as an argument and returns the average of the numbers.
function average(numbers) {
  let sumOfNumbers = 0;
  for (i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  console.log(sumOfNumbers);
  return sumOfNumbers / (numbers.length);
}

const numbers = [1, 2, 3, 4, 5];
// console.log(average(numbers));


// Write a function hypotenuse(a, b) that takes two sides of a right-angled triangle as arguments and returns the length of the hypotenuse using the Pythagorean theorem.
// Sample input: hypotenuse(3, 4) should return 5

function hypotenuse(a, b) {
  const result =  Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));   // sqrt of (a**2 + b**2)
  return result % 1 === 0? result : result.toFixed(2); 
  // here if the result divided by 0 means whole so it will give the result otherwise it will give 2 decimal points (result : result.toFixed(2))
  // condition? true_value : false_value
}

console.log(hypotenuse(3, 4));
console.log(hypotenuse(4, 4));