`use strict`
let acc=localStorage.getItem('info');
let tableEL=document.getElementById("Tb");
console.log(tableEL);
let ObjArr = JSON.parse(acc);
// console.log(ObjArr);



    
let trEL = document.createElement('tr');
    tableEL.appendChild(trEL);

    let tdEl = document.createElement('td');
    trEL.appendChild(tdEl);
  
    let tdEl2 = document.createElement('td');
    trEL.appendChild(tdEl2);
  
  
    let tdEl3 = document.createElement('td');
    tdEl3.textContent="hello";
    trEL.appendChild(tdEl3);

    let tdEl4= document.createElement('td');
    trEL.appendChild(tdEl4);
      
  
