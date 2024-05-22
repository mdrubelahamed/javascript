const accountId = 2246;
let accountEmail = "example@email.com";
let accountPassword = 12345;
let accountCity = "Kolkata";
let accountState;

/* 
  prefer not to use var to declare variable, 
  because of the problem occurs in block scope and functional scope
*/

// it will print those value in a table where one side index no and another side the corresponding values
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


