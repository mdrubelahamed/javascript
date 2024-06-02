const notANumber = NaN;
// console.log(notANumber);

// console.log(5 === 5);


// ********* Type conversion ***************
const num1 = 123;
// console.log(num1);
// console.log(typeof num1);
const num1ToString = String(num1);
// console.log(num1ToString);
// console.log(typeof num1ToString);


// ************** Math *************
// let num2 = Math.abs(-5.3)
// console.log(num2);


// ************ Date ************
const date1 = new Date();
// console.log(date1.toLocaleDateString());
// console.log(date1.toDateString());
// console.log(date1.toString());
// console.log(date1.toTimeString());
// console.log(date1.toLocaleTimeString());


// ********** String **************
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);
// console.log(part);
// console.log(str);


// let str1 = "Hello";
// let str2 = "World!";
// let compare = str1.localeCompare(str2);
// console.log(compare);

// match()
// let str = "The quick brown fox jumps over the lazy dog";
// let matches = str.match(/quick|brown|fox/);
// // console.log(matches);

let str = "The quick brown fox jumps over the lazy dog";
let regex = /[a-z]+/g;
let matches = str.matchAll(regex);
for (const match of matches) {
    console.log(match[0]);
    // console.log(match);
}