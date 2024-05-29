const map = new Map();

map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("CO", "Colombia");

// console.log(map);

/* NOTE
 When you set an array with key-value pairs in JavaScript, it creates an array of arrays, not an object. Each inner array contains a key-value pair like here this stored like this

 [
  ["IN", "India"],
  ["USA", "United State of America"],
  ["FR", "France"],
  ["CO", "Colombia"]
]
*/

// return each value as an individual array
// for (const key of map) {
//   console.log(key);
// }


// key and value as destructuring assignment.
// for (const [key, value] of map) {
//   console.log(`${key} short form of ${value}`);
// }


const obj = {
  name: "Mark",
  age: 21,
  email: "mark@facebook.com",
}

// TypeError: obj is not iterable
// for (const key of obj) {
//   console.log(key);
// }

// ** for of loop only works on iterable like array, map , here the map value 