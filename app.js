`use strict`
function Employee(employeeId, fullName, department, level, imageUrl) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  this.imageUrl = imageUrl;
  arrayOfEmployee.push(this);
}
let arrayOfEmployee = []
let employee1 = new Employee(1000, "Gazi Samer", "Adminstration", "senior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true")
let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true")
let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true")
let employee4 = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true")
let employee5 = new Employee(1004, "Omar Ziad", "Development", "Senior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true")
let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true")
let employee7 = new Employee(1006, "Hadi Ahamd", "Finance", "Senior", "https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true")
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
    let randNum = Math.floor(Math.random() * (1000 - 500)) + 500;
    return this.salary = randNum - (randNum * 0.075)

  }
}
for (let i = 0; i < arrayOfEmployee.length; i++) {
  arrayOfEmployee[i].SalaryValue();

}
//DOM
let sectonOne = document.getElementById("section1");//make section inside html and give it id then call it here
Employee.prototype.render = function () {
  this.SalaryValue();
  let imageOfEmployee = document.createElement("img"); //create image
  imageOfEmployee.src = this.imageUrl;
  sectonOne.appendChild(imageOfEmployee);//add image to section one
  let name1 = document.createElement('h3');//create new element called h3el and give it the same id of section created in main html
  name1.textContent = `Employee Name: ${this.fullName}`;
  sectonOne.appendChild(name1);//put h3el inside sectionone as child so it appear on page
  let idVal = document.createElement('h3');
  idVal.textContent = `ID: ${this.employeeId}`
  sectonOne.appendChild(idVal)
  let depart = document.createElement('h3');
  depart.textContent = `Department: ${this.department}`;
  sectonOne.appendChild(depart);
  let lev = document.createElement('h3');
  lev.textContent = `Level:${this.level}`;
  sectonOne.appendChild(lev);
  let SalaryVal = document.createElement('h4');
  SalaryVal.textContent = this.salary;
  sectonOne.appendChild(SalaryVal);

  //style
  SalaryVal.style.border = "1px solid white";
  SalaryVal.style.width = "25%";
}
for (let x = 0; x < arrayOfEmployee.length; x++) {
  arrayOfEmployee[x].render();
}

////lab8
const arrayOfAnswers = [];
let form1 = document.getElementById("form1");
form1.addEventListener("submit", myFormData);


//form's answers appear on homePage
function myFormData(event) {
  event.preventDefault();
  console.log(event);

  alert("form submitted successfully");

  form1.style.color = "rgb(62, 134, 92)"

  let fullname = (event.target.fname.value);
  let Department = (document.getElementById("dep").value);
  let level = (document.getElementById("lev").value);
  // let imageUrl1=(document.getElementById("imgURL").value);
  let imageurl = event.target.imgURL.value;
  console.log(fullname, Department, level, imageurl);
  arrayOfAnswers.push(fullname, Department, level, imageurl);
  console.log(arrayOfAnswers);

  let formObj = new Employee(uniqueId(), fullname, Department, level, imageurl);
  let card = document.createElement("div");
  formObj.render();
  saveData(arrayOfEmployee);

}

function uniqueId() {
  this.employeeId = parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(".", " "));//create uniqueId
  return this.employeeId;
}
// uniqueId();

//style JS
sectonOne.style.backgroundColor = "#9DC08B";
sectonOne.style.border = "2px solid white";
form1.style.border = "2px solid white";



//local storage
function renderAll() {
  for (let i = 0; i < arrayOfEmployee.length; i++) {
    arrayOfEmployee[i].render();
    // arrayOfEmployee[i].renderTable()
  }
}

//1.save data into localstorage
function saveData(data) {
  let stringOb = JSON.stringify(data);
  localStorage.setItem('info', stringOb);
}
//2.get data from ls
function getData() {
  let getInfo = localStorage.getItem('info');
  console.log(getInfo);
  let ObjArr = JSON.parse(getInfo); //take the array that i git from LS and convert it to array of obj
  console.log(ObjArr);
  //reinstantiation of new instances
  if (ObjArr != null) {
    arrayOfEmployee=[];
    for (let i = 0; i < ObjArr.length; i++)//render all information iside the array
    {
      new Employee(ObjArr[i].employeeId, ObjArr[i].fullName, ObjArr[i].department, ObjArr[i].level, ObjArr[i].imageUrl); //new object inside constructor to be able for render
    }
  }
  renderAll();//3.call the render method
  
  // let newOb= new Employee(ObjArr[ObjArr.length-1].employeeId,ObjArr[ObjArr.length-1].fullName,ObjArr[ObjArr.length-1].department,ObjArr[ObjArr.length-1].level,ObjArr[ObjArr.length-1].imageUrl,);
  // newOb.render();
}
getData();
