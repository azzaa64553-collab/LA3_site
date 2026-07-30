const adminPassword = "mrM_13900_1213";


function loginAdmin(){

let pass = document.getElementById("adminPass").value;


if(pass === adminPassword){

document.getElementById("login").style.display="none";
document.getElementById("panel").style.display="block";

loadUsers();


}else{

alert("رمز اشتباه است");

}

}



// فعلاً اطلاعات نمونه
// بعد از وصل Firebase این بخش واقعی می‌شود

function loadUsers(){

let users = [
{
phone:"09123456789",
code:"12345",
date:"امروز"
}
];


let table = document.getElementById("users");

table.innerHTML="";


users.forEach(user=>{


let row = document.createElement("tr");


row.innerHTML=`

<td>${user.phone}</td>
<td>${user.code}</td>
<td>${user.date}</td>
<td>
<button class="delete-btn">
حذف
</button>
</td>

`;


table.appendChild(row);


});


document.getElementById("count").innerHTML =
"تعداد کاربران: " + users.length;


}
