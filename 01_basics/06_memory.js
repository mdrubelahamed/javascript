// Stack(Primitive) & Heap(Non Primitive)

// ********************** Stack **********************
let ytChannel = "Chai aur code";
let anotherYtChannel = ytChannel;
anotherYtChannel = "Harkirat";

/*
when i change the value of my anotherYtChannel
it changes it's value but not the ytChannel value,
because the value are stored in Stack,
here when you assingn one variable value to another
you get a copy for the value not direct reference
so it changes the copy not the original valye
*/
console.log(ytChannel);  // output: "Chai aur code"
console.log (anotherYtChannel); // output: "Harkirat"


// ********************** Heap **********************

let userOne = {
  name : "Rubel",
  email : "rubel@google.com"
}

let userTwo = userOne;

userTwo.name = "Rohan";
/* 
here both object name with get change
because when the userTwo get the userOne to assign both
get the same reference because it's in Heap memeory
*/
console.log(userOne

);
console.log(userTwo);