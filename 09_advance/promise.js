const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log(`Async 1`);
    resolve();
  }, 1000);
});

promise1.then(() => {
  // console.log(`Promise 1 got resolved`);
})


// create promise without storing into a variable
new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log(`Async 2`);
    resolve();
  }, 1000);
}).then(() => {
  // console.log(`Promise 2 got resolved`);
})


// passing object inside resolve({})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log(`Async 3`);
    resolve({username: 'Rubel', email:'rubel@example.com'});
  }, 1000);
})
 
promise3.then((user) => {
  // console.log(user);
})


// if reject happen in promise
const promise4 = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    resolve({username: `Rubel`, password: 12345});
  } else {
    reject(`ERROR: Promise 4 went wrong`);
  }
})

promise4
.then((user) => {
  console.log(`Promise 4 resolved`);
  return user.username
})
.then((username) => {
  console.log(`Username: ${username}`);
})
.catch((error) => {
  console.log(error);
})


// const promise5 = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) {
//     resolve({username: `javascript`, password: 123});
//   } else {
//     reject(`ERROR: Promise 5 went wrong`);
//   }
// })


