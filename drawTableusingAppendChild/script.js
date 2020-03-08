let myElement= document.createElement("div");
let pageHeader= document.createElement("h1");
pageHeader.innerHTML="hello World";
pageHeader.classList.add("header");
myElement.appendChild(pageHeader);
document.body.appendChild(myElement);
let table= document.createElement("table");
table.setAttribute("border","1");
let tableHead= document.createElement("thead");
tableHead.innerText="Marks Calculator";
table.appendChild(tableHead);
document.body.appendChild(table);

/*to draw table*/
  myFunction= () => {
    let tableRow= document.createElement("tr");
    let tD1=document.createElement("td");
    let tD2=document.createElement("td");
    tD1.innerHTML="Si No.";
    tD2.innerHTML="Name";
    tableRow.appendChild(tD1);
    tableRow.appendChild(tD2);
    table.appendChild(tableRow);
  }
let button= document.createElement("button");
button.innerHTML="Add Tables";
button.setAttribute("id","buttons");
document.body.appendChild(button);
document.getElementById("buttons").addEventListener("click", myFunction);
