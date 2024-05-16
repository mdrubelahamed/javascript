// const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2024, 4, 14); 
// let myCreatedDate = new Date("05-14-2024") // "mm-dd-yyyy"
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

// let customDateValue = myCreatedDate.toLocaleString('default', {
// })

// let customDateValue = Date.now(); // in milisecond
// let customDateValue1 = Date.now() / 1000; // in second
// let customDateValue2 = Math.floor(Date.now() / 1000); // in second removing the decimal values
// let customDateValue3 = Math.round(Date.now() / 1000); // in second removing the decimal values
// console.log(customDateValue1);



// ***************************** TASK *****************************
// Write a JavaScript function that returns the current date and time in the format "YYYY-MM-DD HH:MM:SS"
// Example output: "2023-07-25 14:30:00"

  function getTaskDate() {
    const taskDate = new Date();
    const year = taskDate.getFullYear();
    const month = String(taskDate.getMonth() + 1).padStart(2, '0'); // month starts from 0 in array, that's why we add 1
    const day = String(taskDate.getDate()).padStart(2, '0');
    const hour = String(taskDate.getHours()).padStart(2, '0');
    const minute = String(taskDate.getMinutes()).padStart(2, '0');
    const second = String(taskDate.getSeconds()).padStart(2, '0');
  
    return `Current date is: ${year}-${month}-${day}\nCurrent time is: ${hour}:${minute}:${second}`;
  }
  
// console.log(getTaskDate());


// Write a JavaScript function that takes two Date objects as input and returns the difference between them in days.
// Example input: date1 = new Date("2022-01-01"); date2 = new Date("2022-01-15");
// Expected output: 14 (days)
function diffBetweenTwoDays(date1, date2) {
  diffInMS = date2 - date1;
  diffInDays = Math.abs(diffInMS / (1000 * 60 * 60 * 24));
  return diffInDays;
}

// const date1 = new Date("2022-01-01");
// const date2 = new Date("2022-01-15");
// console.log(`Difference between two dates is: ${diffBetweenTwoDays(date1, date2)} days`);


// Write a JavaScript function that takes a Date object as input and returns a string in the format "DD MMM YYYY" (e.g. "25 Jul 2023").
// Example input: new Date("2023-07-25T00:00:00.000Z");
// Expected output: "25 Jul 2023"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function formatDate(anotherDate, months) {
  // const day = anotherDate.getDate().toLocaleString("en-US", { minimumIntegerDigits: 2 }); // another way to get date and use padding
  const day = String(anotherDate.getDate()).padStart(2, '0');
  let month = months[anotherDate.getMonth()];
  const year = anotherDate.getFullYear();
  
  return `${day} ${month} ${year}`
}
// const anotherDate = new Date("2023-07-25T00:00:00.000Z");
// console.log(formatDate(anotherDate, months));



// Write a JavaScript function that takes a Date object and an integer as input, and returns a new Date object that is the original date plus the specified number of days.
// Example input: date = new Date("2023-07-25"); days = 5;
// Expected output: new Date("2023-07-30")

function formatSpecificDate(randomDate, days) {
  const randomDateInMs = randomDate.getTime();
  const addDaysIntoRandomDateInMs = randomDateInMs + (days * 86400);
  const finalDate = new Date(addDaysIntoRandomDateInMs).toLocaleDateString();
  return finalDate;
}

// const randomDate = new Date("2023-07-25");
// const days = 5;
// console.log(formatSpecificDate(randomDate, days));