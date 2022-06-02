let students =[];


function addDetails(){
    console.log("details added");
    let studentName = document.getElementById("studentName");
    
    students.push(studentName.value);
    
    console.log(students);
    let userCard = document.createElement("div");
    let userName = document.createElement("p");
    userName.innerText = studentName.value;
    studentName.value = ""
    userCard.appendChild(userName);
    userCard.classList.add("userCard");
    let users = document.getElementById("users");
    users.appendChild(userCard);

}
// let submitBtn =document.getElementById("submitBtn");
// submitBtn.addEventListener("click",addDetails);



