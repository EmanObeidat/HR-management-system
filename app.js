`use strict`
function Employee(employeeId, fullName, department, level, salary,imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = salary;
    this.imageUrl=imageUrl;
    arrayOfEmployee.push(this);
}
const arrayOfEmployee=[]
let employee1 = new Employee(1000, "Gazi Samer", "Adminstration", "senior", 0,"imageURL1")
let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", 0,"ImageURL2")
let employee3 = new Employee(1002, "Tama Ayoub", "Marketing", "Senior", 0,"imageURL3")
let employee4 = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior", 0,"ImageURL4")
let employee5 = new Employee(1004, "Omar Ziad", "Development", "Senior", 0,"ImageURL5")
let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", 0,"imageURL6")
let employee7 = new Employee(1006, "Hadi Ahamd", "Finance", "Senior", 0,"imageURL7")
console.log(arrayOfEmployee);
//  Employee.prototype.SalaryValue=function()
//  {
//   if(level=="senior")
//   { return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
//   }
//   else if(level=="Mid-Senior")
//   {
//     return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
//   }
//   else
//   {
//     return Math.floor(Math.random() * (1000 - 500) ) + 500;
//   }
//  }
//  employee1.SalaryValue()

employee1.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
employee2.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
employee3.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
employee4.salary=Math.floor(Math.random() * (1500 - 1000) ) + 1000;
employee5.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
employee6.salary=Math.floor(Math.random() * (1000 - 500) ) + 500;
employee7.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;


 /////done/////
Employee.prototype.render=function(){
document.write(`<h3>FullName is ${this.fullName} and The Salary is ${this.salary}</h3>` )}

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();

// Employee.prototype.employeeLevel=function(level){
//   let min;
//   let max;
//     if(level=="senior")
//     { min=1500;
//       max=200;
//     }
//     else if(level=="Mid-Senior")
//     {
//       min=1000;
//       max=1500;
//     }
//     else
//     {
//       min=500;
//       max=1000;
//     }
//    }
//  Employee.prototype.salaryCal=function(min,max){
// this.salary=Math.floor(Math.random() * (max - min) ) + min;
// return this.salary;
// }