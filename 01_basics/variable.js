const accountId = 2246;
let accountEmail = "example@email.com";
let accountPassword = 12345;
let accountCity = "Kolkata";
let accountState;

/* 
  prefer not to use var to declare variable, 
  because of the problem occurs in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

