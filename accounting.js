
`use strict`
let acc = localStorage.getItem('info');
let ObjArr = JSON.parse(acc);
let arr = [];
for (let x in ObjArr) {
    if (!(arr.includes(ObjArr[x].department)))
        arr.push(ObjArr[x].department);

}
console.log(arr)


let headers = ['Department', 'NumOfEmployee', 'AverageSalary', 'TotalSalary']
let table1 = document.getElementById('table')
// let headerRow = document.createElement('tr')
// headers.forEach(headerName => {
//     let header = document.createElement('th');
//     let textNode = document.createTextNode(headerName);
//     header.appendChild(textNode);
//     headerRow.appendChild(header);
// })
// table1.appendChild(headerRow);


///headers
let h1=document.createElement('th')
h1.textContent='Department'
table1.appendChild(h1);
let h2=document.createElement('th')
h2.textContent='NumOfEmployee';
table1.appendChild(h2);
let h3=document.createElement('th')
h3.textContent='AverageSalary';
table1.appendChild(h3);
let h4=document.createElement('th')
h4.textContent='TotalSalary';
table1.appendChild(h4);
/////data
let cell1 = document.createElement('tr');
cell1.textContent = arr[0];
table1.appendChild(cell1);
let c1=document.createElement('td');
c1.textContent=NumOfEmployee();
cell1.append(c1)
let c12=document.createElement('td');
c12.textContent='Average';
cell1.append(c12)
let c13=document.createElement('td');
c13.textContent='salary';
cell1.append(c13)


/*** */
let cell2 = document.createElement('tr')
cell2.textContent = arr[1];
table1.appendChild(cell2);
let c2=document.createElement('td');
c2.textContent=NumOfEmployee();
cell2.append(c2)
let c22=document.createElement('td');
c22.textContent={AverageSalary};
cell2.append(c22)
let c23=document.createElement('td')
c23.textContent='salary';
cell2.append(c23)

/** */
let cell3 = document.createElement('tr')
cell3.textContent = arr[2];
table1.appendChild(cell3);
let c3=document.createElement('td');
c3.textContent=NumOfEmployee();
cell3.append(c3)
let c31=document.createElement('td');
c31.textContent={AverageSalary};
cell3.append(c31)
/** */
let cell4 = document.createElement('tr')
cell4.textContent = arr[3];
let c4=document.createElement('td');
c4.textContent=NumOfEmployee();
cell4.append(c4);
let c42=document.createElement('td');
c42.textContent={AverageSalary};
cell4.append(c42)
table1.appendChild(cell4);
//////

let sum;
  let NumOfEmployeeDep=0;
   
function NumOfEmployee()
{   
    for (let i=0;i<=table1.length;i++) {
        if(ObjArr[i].department=="Adminstration")
        { 
            NumOfEmployeeDep +=1
            console.log(NumOfEmployeeDep);
            
        }
         if(ObjArr[i].department=="Finance")
        { 
            NumOfEmployeeDep+=1;
        }
        if(ObjArr[i].department=="marketing")
        {
            NumOfEmployeeDep+=1;
        }
        if(ObjArr[i].department=="development")
        {
            NumOfEmployeeDep+=1;
        }
    }
    }
NumOfEmployee();
//calculate avgsalary
function AverageSalary()
{   let avg;
    ObjArr.forEach(element => {
        if(ObjArr[element].level=="senior")
        {
            return avg=(2000+1500)/2
        }
        else if(ObjArr[element].level=="mid-senior")
        {
            return avg=(1500+1000)/2;
        }
        else
        {
            return avg=(1000+500)/2;
        }
    });

}
table1.style.border="2px solid black";

// function TotalSalary()
// {
//     let sum +=ObjArr[i].salary

// }
  