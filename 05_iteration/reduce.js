const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;

// const total = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue)
// console.log(total);

// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
// console.log(total);


const arr = [ { total: 10 }, { total: 20 }, { total: 30 } ]

const sumOfTotal = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.total;
}, 0)
// console.log(sumOfTotal);


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana']
// const countFruits = {};

// fruits.reduce((accumulator, currentValue) => {
//   // console.log(`Accumulator: ${accumulator} and CurrentValue: ${currentValue}`);
//   if(countFruits[currentValue]) {
  //     countFruits[currentValue] += 1;
//   }
//   else {
//     countFruits[currentValue] = 1
//   }
// }, countFruits);

// console.log(countFruits);


/* if inital value is not given => 
1. index 0 will be inital value
2. iteration will start from index 1

*/
const arr1 = [1, 2, 3, 4, 5]
const total2 = arr1.reduce((acc, num) => {
  // console.log(`Accumulator: ${acc} and Current value: ${num}`);
  return acc + num;
}) 
// console.log(total2);

const arr2 = [[1, 2], [3, 4], [5, 6]];
// console.log(arr2.flat(Infinity));

const arr3 = [10, 20, 30, 40, 50];
const sumOfArr3 = arr3.reduce((acc, num) => acc + num, 0);
const avgOfArr3 = sumOfArr3 / arr3.length; 

console.log(avgOfArr3);
