`use strict`
function Employee(employeeId, fullName, department, level, salary, imageUrl) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = salary;
  this.imageUrl = imageUrl;
  arrayOfEmployee.push(this);
}
const arrayOfEmployee = []
let employee1 = new Employee(1000, "Gazi Samer", "Adminstration", "senior", 0, "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true")
let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", 0,"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true")
let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", 0, "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true")
let employee4 = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior", 0, "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true")
let employee5 = new Employee(1004, "Omar Ziad", "Development", "Senior", 0, "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true")
let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", 0, "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true")
let employee7 = new Employee(1006, "Hadi Ahamd", "Finance", "Senior", 0, "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true")
console.log(arrayOfEmployee);
Employee.prototype.SalaryValue = function () {
  if (this.level == "senior") {
    let randNum = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    return this.salary = randNum - (randNum * 0.075)

  }
  else if (this.level == "Mid-Senior") {
    let randNum = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    return this.salary = randNum - (randNum * 0.075)

  }
  else {
    let randNum= Math.floor(Math.random() * (1000 - 500)) + 500;
    return this.salary = randNum - (randNum * 0.075)

  }
}
for (let i = 0; i < arrayOfEmployee.length; i++) {
  arrayOfEmployee[i].SalaryValue();

}
//DOM
let sectonOne=document.getElementById("section1");//make section inside html and give it id then call it here
Employee.prototype.render= function () {
  let imageOfEmployee=document.createElement('img'); //create image
  imageOfEmployee.src=this.imageUrl;
  sectonOne.appendChild(imageOfEmployee);//add image to section one
  let name1=document.createElement('h3');//create new element called h3el and give it the same id of section created in main html
  name1.textContent=`Employee Name: ${this.fullName}`;
  sectonOne.appendChild(name1);//put h3el inside sectionone as child so it appear on page
  let idVal=document.createElement('h3');
  idVal.textContent=`ID: ${this.employeeId}`
  sectonOne.appendChild(idVal)
  let depart=document.createElement('h3');
  depart.textContent=`Department: ${this.department}`;
  sectonOne.appendChild(depart);
  let lev=document.createElement('h3');
  lev.textContent=`Level:${this.level}`;
  sectonOne.appendChild(lev);
  let SalaryVal=document.createElement('h4');
  SalaryVal.textContent=this.salary;
  sectonOne.appendChild(SalaryVal);
  //style
  SalaryVal.style.border="1px solid white";
  SalaryVal.style.width="25%";
}
for (let x = 0; x < arrayOfEmployee.length; x++) {
  arrayOfEmployee[x].render();
}

////lab8
const arrayOfAnswers=[];
let form1=document.getElementById("form1");
form1.addEventListener("submit",myFormData);


//form's answers
function myFormData(preventref)
{preventref.preventDefault();
  alert("submitted successfully");
  form1.style.color="rgb(62, 134, 92)"
  let value1=preventref.target.fname.value;//save the answers of box
  let value4=preventref.target.imgURL.value;
  arrayOfAnswers.push(value1,value4);
}
function selectedSubjectName() {
  var subjectIdNode = document.getElementById('dep');//save the answers of select
  var value =subjectIdNode.options[subjectIdNode.selectedIndex].text;
  arrayOfAnswers.push(value);
}
function levSelectValue()
{  var LevelSelected = document.getElementById('lev');
var valueOfLevel=LevelSelected.options[LevelSelected.selectedIndex].text;
arrayOfAnswers.push(valueOfLevel);
}
console.log(arrayOfAnswers);



//style JS
sectonOne.style.backgroundColor="#9DC08B";
sectonOne.style.border="2px solid white";
form1.style.border="2px solid white"
