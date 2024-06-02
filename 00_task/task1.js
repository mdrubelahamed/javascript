// let name = "Light";
// name = "Dark";
// console.log(name);

// console.table()
const str1 = "Mark";
const str2 = "Zack";
const str3 = "Sama";
const str4 = "Peter";
// console.table([str1, str2, str3, str4])

// Data Types
let foo = "hello";
// console.log(1 + 2 + 3 + "55" + 4); // weakly typed programming language => implict type conversion

let dream ;
// console.log(typeof dream);

const number = 1
const string = "Sama"
const bigInt = BigInt(1)
const isLearningImportant = true
const symbol = Symbol(123)
const noValue = null
const notALegalNumber = NaN

const obj = {
  name : "Bill",
  age: 26,
}
// console.log(obj.iDontExixt);

// const notSafeInt = Math.pow(2, 100)
// console.log(Number.isSafeInteger(notSafeInt)); // if safe => true, if safe not => false

const num = 2**100000
// console.log(num);

const str = "Hello, World!";
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));

// console.log(str.at(0));
// console.log(str.charCodeAt(0));

/*
String Manipulation
Task: Write a JavaScript program that takes a string as input and performs the following operations:
Convert to lowercase: Convert the input string to lowercase.
Remove whitespace: Remove all whitespace characters from the string.
Replace a word: Replace the word "JavaScript" with "Programming" in the string.
Extract a substring: Extract the substring from the 5th character to the 10th character.
Pad with zeros: Pad the string with zeros to a length of 10 characters.
Split and join: Split the string into an array of words and then join them back into a string with commas.
*/

const email = "example@gmail.com "
// console.log(email.trim());

const cheerJS = "Hello JavaScript";
// console.log(cheerJS.replace("JavaScript", "Programming"));
const longSentence = "The quick brown fox jumps over the lazy dog."
// replaceChar = longSentence.replace(/[aeiou]/ig, "@") 
// console.log(replaceChar);

// getSpecificChar = longSentence.substring(5, 11)
// console.log(getSpecificChar);

const greet = "Hello"
// console.log(greet.padStart(10, "@")); // the final lenght will be 10, and the @ will be in the start
// console.log(greet.padEnd(10, "@")); //  the final lenght will be 10, and the @ will be in the end

let sentence = "Hello, World, JavaScript is awesome!";
// console.log(sentence);
let words = sentence.split(" ")
// console.log(words);
let joinWordsWithComma = words.join(",")
// console.log(joinWordsWithComma);

/*
Task: Write a JavaScript program that takes a string as input and extracts a part of the string using the slice() method.
Input String: "Hello, World, this is a test string."
Goal: Extract the substring from the 7th character to the 14th character.
*/

const testString = "Hello, World, this is a test string.";
const extractFromTestString = testString.slice(7, 15)
// console.log(extractFromTestString);




function sliceMethodExamples() {
  let originalString = "Hello, World, this is a test string.";

  // 1. Basic Slice
  let basicSlice = originalString.slice(0, 5);
  console.log(`0 to 5: "${basicSlice}"`);

  // 2. Negative Index
  let negativeIndexSlice = originalString.slice(-6);
  console.log(`-6 to end: "${negativeIndexSlice}"`);

  // 3. End Index Greater Than Length
  let endIndexGreaterThanLength = originalString.slice(0, 20);
  console.log(`0 to 20: "${endIndexGreaterThanLength}"`);

  // 4. Start Index Greater Than Length
  let startIndexGreaterThanLength = originalString.slice(20, 25);
  console.log(`20 to 25: "${startIndexGreaterThanLength}"`);

  // 5. Slice with Negative Start Index
  let negativeStartIndexSlice = originalString.slice(-10, -5);
  console.log(`-10 to -5: "${negativeStartIndexSlice}"`);

  // 6. Slice with Negative End Index
  let negativeEndIndexSlice = originalString.slice(-10, -5);
  console.log(`-10 to -5: "${negativeEndIndexSlice}"`);

  // 7. Slice with Negative Start and End Index
  let negativeStartAndEndIndexSlice = originalString.slice(-10, -5);
  console.log(`-10 to -5: "${negativeStartAndEndIndexSlice}"`);

  // 8. Slice with Start Index Greater Than End Index
  let startIndexGreaterThanEndIndex = originalString.slice(10, 5);
  console.log(`10 to 5: "${startIndexGreaterThanEndIndex}"`);

  // 9. Slice with Negative Start Index Greater Than End Index
  let negativeStartIndexGreaterThanEndIndex = originalString.slice(-10, -15);
  console.log(`-10 to -15: "${negativeStartIndexGreaterThanEndIndex}"`);

  // 10. Slice with Negative End Index Greater Than Start Index
  let negativeEndIndexGreaterThanStartIndex = originalString.slice(-15, -10);
  console.log(`-15 to -10: "${negativeEndIndexGreaterThanStartIndex}"`);

  return;
}

// sliceMethodExamples();