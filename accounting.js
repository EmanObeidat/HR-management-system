`use strict`
let acc=localStorage.getItem('info');
let tableEL=document.getElementById("Tb");
function EmployeeInfo(Department,employeeNum,averageSalary,totalSalary)
{
    this.Department=Department;
    this.employeeNum=numOfEmployee();
    this.averageSalary=0;
}
EmployeeInfo.prototype.renderTable= function(){

    let trEL = document.createElement('tr');
   tableEL.appendChild(trEL);

  
    let tdEl = document.createElement('td');
    tdEl.textContent=this.department;
    trEL.appendChild(tdEl);
  
    let tdEl2 = document.createElement('td');
    tdEl2.textContent=numOfEmployee();
    trEL.appendChild(tdEl2);
  
  
    let tdEl3 = document.createElement('td');
    tdEl3.textContent="hello";
    trEL.appendChild(tdEl3);

    let tdEl4= document.createElement('td');
    tdEl4.textContent=numOfEmployee();
    trEL.appendChild(tdEl4);
      
  }
  renderTable();
 