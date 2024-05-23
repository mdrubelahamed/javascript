// const userMail = []

// if (userMail) {
//   console.log("Got user mail.");
// }
// else {
//   console.log("Didn't get user mail.");
// }


/*
Falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

all other value are truthy value ex:
"0", "false", " ", [], {}, function() {}, 
*/


// const arr = []
// if (arr.length === 0) {
  // console.log("Array is empty.");
// }

// const obj = {}
// //Object.keys(obj) => return an array
// if (Object.keys(obj).length === 0) {
//   console.log("Object is empty.");
// }


// ****** Nullish Coalescing Operator(??): null undefined ***********
// **IMPORTANT** => The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand

let val1 = undefined;
val1 = 5 ?? 10;
// console.log(val1);

let val2 = null ?? undefined;
// let val2 = undefined ?? null;
// console.log(val2);


// let val3 = null || undefined ?? "foo" //  SyntaxError: Unexpected token '??'
let val3 = (null || undefined) ?? "foo" // ✅ Perfect code => we need to add paranthesis()
// console.log(val3)



// ********** Ternary Operator ******************
// condition ? true : false

const balance = 1000;
// balance > 500 ? console.log("Balance is more than 500") : console.log("Balnce is not more than 500");
