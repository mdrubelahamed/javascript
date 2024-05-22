// You have an array of iects representing students, with each iect containing properties for name, age, and grade. Write a function that takes this array as an input and returns a new array with only the students who are older than 18 and have a grade higher than 80

const students = [
  { name: 'John', age: 20, grade: 90 },
  { name: 'Jane', age: 17, grade: 70 },
  { name: 'Bob', age: 22, grade: 95 },
  { name: 'Alice', age: 19, grade: 85 },
  { name: 'Mike', age: 16, grade: 60 }
];


// *** way 1 ***

// function filterStudents (students) {
//   let finalArray = [];
//   for (i = 0; i < students.length; i++) {
//     const studentDetail = students[i]
//     const studentAge = studentDetail.age;
//     const studentGrade = studentDetail.grade;
//     if (studentAge > 18 && studentGrade > 80) {
//       finalArray.push(studentDetail)
//     }
//   }
//   return finalArray;
// }

// console.log(filterStudents(students));

// *** way 2 ***

function filterStudents(students) {
  return students.filter(students => students.age > 18 && students.grade > 80);
}

// **** way 3 ***
// const filterStudents = students => students.filter(students => students.age > 18 && students.grade > 80);


console.log(filterStudents(students));