// const tinderUser = new Object(); // create object in singleton

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Mark"
tinderUser.email = "abc@gmail.com"
tinderUser.fullName = {
  userName: {
    firstName: "Rubel",
    lastName: "Ahamed",
  }
}
// console.log(tinderUser.fullName.userNameeee?.lastName); // this will return 'undefined' not error because of the '?' 
// console.log(tinderUser.fullName.userNameeee.lastName); // this will retrun an error


const obj1 = {1: "abc", 2: "xyz"}
const obj2 = {3: "abc", 4: "xyz"}
const obj3 = {5: "abc", 6: "xyz"}

// Merge two object using two differenct method => 1. Object.assign(target, source), 2. spread Method
// console.log(Object.assign({}, obj1, obj2, obj3)); // {} => target, (obj1, obj2, obj3) => source
// console.log({...obj1,...obj2, ...obj3});

// Getting keys and valus from an particular object
// console.log(Object.keys(tinderUser.fullName.userName));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser.fullName.userName));
// console.log(Object.values(tinderUser));

// using entries for learning
// console.log(Object.entries(tinderUser));

// hasOwnProperty method
// console.log(tinderUser.hasOwnProperty("fullName"));
// console.log(tinderUser.hasOwnProperty("helloName"));



// **************** Task ********************

const userProfile = {
  id: "abc1",
  name: "Mark Zuckerberg",
  email: "zuck@facebook.com",
  address: {
    street: "Silicon Valley",
    city: "Huwai",
    state: "Texas",
  }
}

userProfile.address.zipCode = 844421;
console.log(userProfile.address.zipCode);
console.log(userProfile.address.zipCode);
// console.log(userProfile.address.street);