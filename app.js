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
 Employee.prototype.SalaryValue=function()
 {
  if(this.level=="senior")
  { 
     let randNum=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
     return this.salary=randNum-(randNum*0.075)

  }
  else if(this.level=="Mid-Senior")
  {
    let randNum= Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    return this.salary=randNum-(randNum*0.075)

  }
  else
  {
    let randNum= Math.floor(Math.random() * (1000 - 500) ) + 500;
    return this.salary=randNum-(randNum*0.075)

  }
 }
for(let i=0;i<arrayOfEmployee.length;i++)
{
    arrayOfEmployee[i].SalaryValue();
    
}

// employee1.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
// employee2.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
// employee3.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
// employee4.salary=Math.floor(Math.random() * (1500 - 1000) ) + 1000;
// employee5.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;
// employee6.salary=Math.floor(Math.random() * (1000 - 500) ) + 500;
// employee7.salary=Math.floor(Math.random() * (2000 - 1500) ) + 1500;


 /////done/////
Employee.prototype.render=function(){
document.write(`<p>FullName is ${this.fullName} and The Salary is ${this.salary}</p>` )}

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();

