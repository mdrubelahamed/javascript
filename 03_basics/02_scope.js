// block scope, global scope 
let i = 10; // global scope i

function numbers() {
  let i = 50; // block scope i
  console.log("Inner i:", i);
}

// numbers();
// console.log("Outer i:", i); 



// ****** Nested Scope ********

// ****** Clouser ********

// console.log("hel");