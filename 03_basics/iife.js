// IIFE (immediatly invoked function expressions)

// t#P#is means the function should execute immediately
// why? => 1. execute after declaration immediately 2. sometime global scope poolution happened so we don't want the function get correpted by global scope

// how to write iife ?
(function greet(){
  console.log(`Hello`);
})(); // naemd iife

/*
()(); => syntax
() => first paranthesis for write the function
() => second paranthesis for execute the function
; => semicolor cause iife doensn't know when to end, so explicitly add semicolon to end the function
*/

// iife with param
(function greetWithName(name){
  console.log(`Hello ${name}`);
})('Rubel'); // named iife, if i don't give the argument it will give 'undefined'

// write a unnamed iife / arrow function iife
(() => console.log(`Hello2`))();

// unnamed iife with param
((name) => console.log(`Hello2 ${name}`))('Rubel2');


// ******************** Q ******************
/*
1. how to declear an iife ?
2. why should we declear iife ?
3. how to declear named iife and Unnamed iife ?
4. how to declear iife with param and what happend if we don't give param ?
*/