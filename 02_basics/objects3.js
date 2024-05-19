function employeeSalaryCalculator(employee) {
  if (typeof employee !== "object") {
    console.log("Please give an employee details inside an Object.")
    return
  }
  const payRate = employee.payRate;
  const hoursWorked = employee.hoursWorked;
  return payRate * hoursWorked
}

const employee1 = {
  name: "Mark",
  payRate: 100,
  hoursWorked: 8,
}

// console.log(typeof employee1); // 1. typeof return a string, 2. it's return type in smallcase

console.log(employeeSalaryCalculator(employee1));