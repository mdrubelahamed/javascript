function Person(name, age){
  this.name = name;
  this.age = age;
  this.bio = function() {
    console.log(`I'm ${this.name} and My age is ${this.age}`);
  }
}

Person.prototype.greet = function(){
  console.log(`Welcome ${this.name} to this constructor function.`);
}

const person1 = new Person(`Mark`, 21);
person1.greet()
person1.bio()