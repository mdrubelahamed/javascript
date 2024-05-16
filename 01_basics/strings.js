// const gameName = new String("Mind"); = "Garena"
// console.log(gameName = new String("Mind"););
// console.log(gameName = new String("Mind");[0]);

// const myGame = new String("BeyondBlue")
// console.log(myGame[0]);
// console.log(myGame.__proto__);


// console.log(myGame.length);
// console.log(myGame.charAt(3));
// console.log(myGame.indexOf('o'));


let myName = "Md-Rubel-Ahamed"
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.toString());

let whitespaceWord = "     Hello Javascript      "
// console.log(whitespaceWord);
// console.log(whitespaceWord.trim());

// console.log(myName.substring(3, 8)); //(start, end) like python range function
// console.log(myName.substring(9));

// console.log(myName.substr(3, 5)); // (start, length)
/*
start: The index of the first character to include in the extracted substring.
length: The number of characters to extract.
*/

// if (start > end) it automatically swaps value in substring so it will be (1, 10)
// console.log(myName.substring(10,1)); 
// console.log(myName.slice(-5, 0));

// console.log(myName.indexOf("d")); // returns the index of the first occurrence
// console.log(myName.lastIndexOf("d")); // returns the index of the last occurrence

// console.log(myName.includes("R")); // return boolean true/false based on the string include or not
// console.log(myName.includes("r"));
// console.log(myName.includes("d"));
// console.log(myName.includes("X"));
// console.log(myName.includes("Rubel"));

// console.log(myName.startsWith("M"));
// console.log(myName.startsWith("Md"));
// console.log(myName.startsWith("x"));
// console.log(myName.startsWith("Rubel"));

// console.log(myName.charAt(100));
// console.log(myName.charAt(5));
// console.log(myName.charCodeAt(8));

// console.log(myName.split("-"));

let exArray = ["My", "Name", "is", "Md", "Rubel", "Ahamed"];
// console.log(exArray.join(" "));

let brandName = "Beyond Red";
// console.log(brandName.replace("Red", "Blue"));

// console.log(brandName.match("Red"));

// let found = brandName.match("B")
// function returnMatch() {
//   if (found === null) {
//     return null;
//   }
//   else {
//     return found[0];
//   }
// }

// console.log(returnMatch());

let bookName = "Think and Grow Rich`"
// console.log(bookName.match(/i/g)); // g => global search, find all matches not the first one => retrun an array
// console.log(bookName.match(/I/i)); // i => case-insensitive search, it will search where it's UPPERCASE or lowercase (I, i)
// console.log(bookName.match(/I/gi)); // combine both global search and case-insensitive search
// console.log(bookName.match(/I/ig)); // you can swap g,i

// const str = "Hello, my name is John, hello"
// // const result = str.match(/name/g);
// const result = str.match(/hello|hi/i)
// console.log(result);

// ********************** Challenge **********************
// input: "Hello", "World"
// output: "Hello World"

// const str1 = "Hello"
// const str2 = "World"

// let str3 = `${str1} ${str2}`
// console.log(str3);

// console.log(exArray.at(2)); // return the the value of this particular index
// console.log(myName.charAt(2));
// console.log(myName.at(2));

// console.log(myName.endsWith("Ahamed"));
// console.log(myName.endsWith("mridha"));

// console.log(myName.startsWith("Md"));
// console.log(myName.startsWith("mridha"));

// console.log(myName.includes("Rubel"));

// console.log(myName.indexOf("d"));
// console.log(myName.lastIndexOf("d"));


// compare in sort order who comes first
const string1 = "hello"
const string2 = "hellp"

// console.log(string1.localeCompare(string1)); // return 0, because both in sort order same
// console.log(string1.localeCompare(string2)); // return -1, string1 comes before string2 in sort order
// console.log(string2.localeCompare(string1)); // return 1, string2 comes after string1 in sort order

const gameName = new String("Deep-Mind");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.bold());
// console.log(gameName.codePointAt(0));
// console.log(gameName.codePointAt(1));
// console.log(gameName.codePointAt(2));
// console.log(gameName.codePointAt(3));
// console.log(gameName.codePointAt(4));
// console.log(gameName.codePointAt(5));
// console.log(gameName.padStart());
// console.log(gameName.padEnd());


// ****************** in substring we can't use negative(-) value if we use it it will start from 0 ******************
// console.log(gameName.substring(0, 4)); 
// console.log(gameName.split("-"));
// console.log(gameName.substring(-23, 4)); // negative value start from 0 and go upto the positive(+) no
// console.log(gameName.substring(5, -4)); // negative value start from 0 and go upto the positive(+) no

// ****************** in slice we can use negative(-) values ******************
// console.log(gameName.slice(-9, -5));
// console.log(gameName.slice(-9, 4));


const newStringOne = "        Rubel         "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trimStart());

const url = "https://rubel.com/my%20project"
const anotherUrl = url.replace('%20', '-')
// console.log(anotherUrl);
// console.log(url.includes("project"));
// console.log(url.includes("adult"));

console.log(gameName.split('-'));