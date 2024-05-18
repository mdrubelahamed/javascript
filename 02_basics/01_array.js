// Write a JavaScript function that takes an array and an element as input, and returns a new array with the element added to the end of the original array.
const arr1 = [1, 2, 3];
arr1.push(4);
// console.log(arr1);



// Write a JavaScript function that takes an array as input, removes the last element from the array, and returns the removed element.
const arr2 = [1, 2, 3, 4]
arr2.pop()
// console.log(arr2);


// Write a JavaScript function that takes an array and an element as input, and returns a new array with the element added to the beginning of the original array.
const arr3 = [1, 2, 3]
arr3.unshift(0)
// console.log(arr3);

// Write a JavaScript function that takes an array as input, removes the first element from the array, and returns the removed element.
const arr4 = [1, 2, 3, 4]
const shiftValue = arr4.shift()
// console.log(shiftValue);


// Write a JavaScript function that takes an array and an element as input, and returns a boolean indicating whether the element is present in the array.
const arr5 = [1, 2, 3, 4]
// console.log(arr5.includes(3));



// Write a JavaScript function that takes an array and a separator as input, and returns a string with the elements of the array joined by the separator.
const arr6 = [1, 2, 3, 4]
const newArr = arr6.join('-')
// console.log(newArr);


// Write a JavaScript function that takes an array and two indices as input, and returns a new array with the elements from the start index to the end index (exclusive).
const arr7 = [1, 2, 3, 4, 5]
const newArr2 = arr7.slice(1, 3)
// console.log(newArr2);
// console.log(arr7);


// Write a JavaScript function that takes an array, a start index, and a number of elements to remove as input, and returns a new array with the elements removed from the start index.
const arr8 = [1, 2, 3, 4, 5]
const newArr3 = arr8.splice(1, 2)
// console.log(newArr3);
// console.log(arr8);


// Write a JavaScript function processArray that takes an array arr as input and returns a new array with the following transformations applied:

// Add the element 0 to the beginning of the array using unshift.
// Remove the last element from the array using pop.
// Add the element 10 to the end of the array using push.
// Remove the first element from the array using shift.
// Check if the element 5 is present in the array using includes.
// Join the elements of the array into a string separated by commas using join.
// Extract a slice of the array from index 2 to 4 using slice.
// Remove 2 elements starting from index 1 using splice.
// The final output should be a new array with the transformed elements.

function processArray(arr) {
  arr.unshift(0)
  arr.pop()
  arr.push(10)
  arr.shift()
  console.log(arr.includes(5))
  const slicedArray = arr.slice(2, 4)
  arr.splice(1, 2)
  const joinedString = arr.join(', ');
  console.log(joinedString);
  return arr;

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(processArray(arr));
// Example input:
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Expected output:

// [0, 3, 4, 10, 7, 8]