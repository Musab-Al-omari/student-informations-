'use strict';
const headerArray = ['id', 'Name', 'Email', 'Mobile', 'Age', 'Tuition'];
// helper function
function randomNumber(max,min) {
  return Math.round(Math.random()*(max-min)+min);
}

let x=0;




function Enter(email,phoneNumber,tuition) {
  this.email=email;
  this.phoneNumber=phoneNumber;
  this.tuition=tuition;
  Enter.all.push(this);

}
Enter.all=[];
console.table(Enter.all);

let inputSection = document.getElementById('inputSection');
inputSection.addEventListener('submit',handSubmit);

function handSubmit(event) {
  event.preventDefault();
  let email =document.getElementById('name').value;
  let phoneNumber =event.target.number.value;
  let tuition =event.target.selectNav.value;
  new Enter(email,phoneNumber,tuition);
  x++;
  setItem();
  dateRender();

}

let outputxSection = document.getElementById('outputSection');
let tablex = document.createElement('table');
outputxSection.appendChild(tablex);
let tableBody =document.createElement('tbody');
tablex.appendChild(tableBody);

function render() {
  let newRow = document.createElement('tr');
  tableBody.appendChild(newRow);
  for (let i = 0; i < headerArray.length; i++) {
    let newCiels = document.createElement('th');
    newRow.appendChild(newCiels);
    newCiels.textContent=headerArray[i];
  }
}
render();


function dateRender() {

  for (let i = 0; i < Enter.all.length; i++) {
    let oldRow = document.createElement('tr');
    tableBody.appendChild(oldRow);
    let idCiels = document.createElement('td');
    oldRow.appendChild(idCiels);
    oldRow.textContent=x;

    let nameCiels = document.createElement('td');
    oldRow.appendChild(nameCiels);
    nameCiels.textContent='xxxxxxxxx';

    let emailCiels = document.createElement('td');
    oldRow.appendChild(emailCiels);
    emailCiels.textContent=Enter.all[i].email;

    let phoneCiels = document.createElement('td');
    oldRow.appendChild(phoneCiels);
    phoneCiels.textContent=Enter.all[i].phoneNumber;

    let ageCiels = document.createElement('td');
    oldRow.appendChild(ageCiels);
    ageCiels.textContent=randomNumber(18,24);

    let tuitionCiels = document.createElement('td');
    oldRow.appendChild(tuitionCiels);
    tuitionCiels.textContent=Enter.all[i].tuition;



  }
}




function setItem() {
  let gg = JSON.stringify(Enter.all);
  localStorage.setItem('information',gg);

}

function getItem() {
  let gg = localStorage.getItem('information');
  if (gg) {
    Enter.all=JSON.parse(gg);
  }

}
getItem();






