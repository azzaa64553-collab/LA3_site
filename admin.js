import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


import { 
getDatabase,
ref,
onValue,
remove
}
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";



const firebaseConfig = {

apiKey: "AIzaSyAUPnkLgHdNw2jXRe76gQ113_6aCiAFtXo",

authDomain: "la3nazr.firebaseapp.com",

databaseURL:
"https://la3nazr-default-rtdb.firebaseio.com",

projectId:"la3nazr",

storageBucket:
"la3nazr.firebasestorage.app",

messagingSenderId:"819824551752",

appId:
"1:819824551752:web:87e8a2555c6df97edeb57d"

};



const app = initializeApp(firebaseConfig);

const db = getDatabase(app);



document
.getElementById("loginBtn")
.onclick=function(){


let pass =
document.getElementById("adminPass").value;



if(pass==="mrM_13900_1213"){


document.getElementById("login").style.display="none";


document.getElementById("panel").style.display="block";


loadUsers();


}

else{


alert("رمز اشتباه است");


}


};






function loadUsers(){


const usersRef = ref(db,"users");



onValue(usersRef,(snapshot)=>{


let table =
document.getElementById("users");


table.innerHTML="";



let count=0;



snapshot.forEach((child)=>{


let user=child.val();


count++;



table.innerHTML += `

<tr>

<td>${user.phone || "-"}</td>

<td>${user.code || "-"}</td>

<td>${user.time || "-"}</td>


<td>

<button onclick="deleteUser('${child.key}')">

حذف

</button>


</td>


</tr>

`;



});



document.getElementById("count").innerHTML =
"تعداد کاربران: "+count;



});


}







window.deleteUser=function(id){



if(confirm("حذف شود؟")){


remove(ref(db,"users/"+id));


}



}
