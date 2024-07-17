// File System
const fs = require('fs')
// console.log(fs);

// // create a file using node module
// fs.writeFile('message.txt', 'Hello, Welcome to backend NodeJS!', (err) => {
//   if (err) throw err;
//   console.log(`Your file has been saved Successfully.`);
// })


// read the same file
fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})


// how to use native node modules?

// link below
// https://nodejs.org/docs/latest-v20.x/api/fs.html