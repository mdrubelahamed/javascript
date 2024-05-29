// map Method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add10InNumbers = numbers.map(num => num + 10);
// console.log(add10InNumbers);

// chaining of methods

const chainingOfMethods = numbers
                          .map(num => num * 10)
                          .map(num => num + 1)
                          .filter(num => num > 50)
                          .map(num => num + 4)
                          .filter(num => num > 60)

// console.log(chainingOfMethods);