document.querySelector("form").addEventListener("submit",hospitalmanagement);
let staffArr=JSON.parse(localStorage.getItem("hospital"))|| [];

displayTable(staffArr);
function hospitalmanagement(e) {
    e.preventDefault();
    let Name=document.querySelector("#name").value;
    let DoctorID=document.querySelector("#docID").value;
    let Specialization=document.querySelector("#dept").value; 
    let Experience=parseInt(document.querySelector("#exp").value); 
    let Email=document.querySelector("#email").value; 
    let Mobile=document.querySelector("#mbl").value; 
   
    let Hospitalobj={
        Name,DoctorID,Specialization,Experience,Email,Mobile
    };
    staffArr.push(Hospitalobj);
    localStorage.setItem("hospital",JSON.stringify(staffArr));
    displayTable(staffArr);
}
function displayTable(staffArr) {
    document.querySelector("tbody").innerText="";
    staffArr.forEach((el) => {
        let row =document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=el.Name;
        let td2=document.createElement("td");
        td2.innerText=el.DoctorID;
        let td3=document.createElement("td");
        td3.innerText=el.Specialization;
        let td4=document.createElement("td");
        td4.innerText=el.Experience;
        let td5=document.createElement("td");
        td5.innerText=el.Email;
        let td6=document.createElement("td");
        td6.innerText=el.Mobile;
        let td7=document.createElement("td");
        if(el.Experience>5)td7.innerText="Senior";
        else if(el.Experience>=2 && el.Experience<=5)td7.innerText="Junior";
        else if(el.Experience>=1)td7.innerText="Trainee";
        let td8=document.createElement("button");
        td8.innerText="delete";
        td8.style.cursor="pointer";
        td8.addEventListener("click",function () {
            staffArr.splice(this.i,1);
        localStorage.setItem("hospital",JSON.stringify(staffArr));
        displayTable(staffArr)
        })
    
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.querySelector("tbody").append(row);  
    });
    
}