const user = {
  username: 'Rubel',
  userId: 1,
  isSignedIn: true,

  getUserDetails: function() {
    // console.log(`${this}`);
    console.log(this);
  }
}

// console.log(user.getUserDetails());

// const date = new Date()
// console.log(this);

function User(username, userId, isSignedIn) {
  this.username = username;
  this.userId = userId;
  this.isSignedIn = isSignedIn;

  // return this
}

const user1 = new User('Alice', 2, true)
const user2 =  new User('John', 3, false)

console.log(user1);
console.log(user2);

