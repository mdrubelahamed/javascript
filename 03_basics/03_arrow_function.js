// *********** arrow function (=>) ****************

/*
explicit return => if u start a scope in arrow function then you have use return keyword explicitly even if we write in single line
example:
```
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const greaterThanFour = nums.filter(num => num > 4); // not open scope no need to explictly write 'return' keyword
const greaterThanFour = nums.filter(num => { return num > 4}); // open scope{} explictly have to write 'return' keyword
console.log(greaterThanFour);
```
*/

// const addingTwoNumbers = function(a, b) {
  // return a + b;
// }
// console.log(addingTwoNumbers(3, 4));

//  ************* in arrow ************
// const addingTwoNumbers = (a, b) => a + b;
// console.log(addingTwoNumbers(3, 4));

// ********
// function addingTwoNumbers(a, b) {
//   return a + b;
// }
// console.log(addingTwoNumbers(3, 4));