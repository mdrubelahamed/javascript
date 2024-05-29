// for
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// *** TABLE 1 to 10 *******
// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of Number ${i}`);  
//   for (let j = 1; j <= 10; j++) {
//     // console.log(i + ' * ' + j + ' = ' + i *j);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }


// const myArray = ["rohan", "shuvam", "jojo"]
// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }

// ******** Break and continue ********


// ***** break
// for (let index = 1; index <= 10; index++) {
  //   if (index === 5) {
//     console.log("Value 5 detected");
//     break;
//   }
//   console.log(index);  
// }
/* 
Output:
1
2
3
4
Value 5 detected
*/


// ******** continue
// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop for 1 time

// for (let index = 1; index <= 10; index++) {
  //   if (index === 5) {
    //     console.log("Value 5 detected");
//     continue;
//   }
//   console.log(index);  
// }
/*
Output:
1
2
3
4
Value 5 detected
6
7
8
9
10
*/


// ***** task
// const exampleArr1 = [5, 12, 7, 30, 55, 20, 15, 60, 40]
// for (let index = 0; index < exampleArr1.length; index++) {
//   const element = exampleArr1[index];
//   if (element < 10) {
//     continue
//   }
//   else if (element > 50) {
//     break
//   }
//   else {
//     console.log(`Element: ${element}`);
//   }
  
// }


// ******** do while loop
// let score = 40
// do {
//   console.log(`Score: ${score}`);
//   score++;
// } while (score < 50);


// ******** for of loop
const randomArray = [5, 9, 2, 17, 4, 8, 11];

for (const element of randomArray) {
  // console.log(element);
}

/*
syntax =>
for (variable of iterable) {
  // exeuted code
}

example:
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

*/

const arr = [1, 2, 3, 4]
for (let num of arr) {  // use let to reassign the varible
  num += 1
  // console.log(num);
}

const name = "Mark"
for (const char of name) {
  // console.log(char);
}

const fullName = "Sam Altman";

for (const char of fullName) {
  if (char === " ") continue;
  // console.log(char);
}


// ******* map