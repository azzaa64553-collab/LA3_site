import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUPnkLgHdNw2jXRe76gQ113_6aCiAFtXo",
  authDomain: "la3nazr.firebaseapp.com",
  databaseURL: "https://la3nazr-default-rtdb.firebaseio.com",
  projectId: "la3nazr",
  storageBucket: "la3nazr.firebasestorage.app",
  messagingSenderId: "819824551752",
  appId: "1:819824551752:web:87e8a2555c6df97edeb57d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// رمز مدیریت
const ADMIN_CODE = "mrM_13900_1213";

let pass = prompt("رمز مدیریت را وارد کنید:");

if(pass !== ADMIN_CODE){
    alert("رمز اشتباه است");
    location.href="index.html";
}


// نمایش اطلاعات کاربران
const usersBox = document.getElementById("users");

const usersRef = ref(db,"users");

onValue(usersRef,(snapshot)=>{

    usersBox.innerHTML="";

    snapshot.forEach((child)=>{

        let data = child.val();

        usersBox.innerHTML += `
        <div class="user">
        📱 شماره: ${data.phone || ""}
        <br>
        🔑 کد: ${data.code || ""}
        <br>
        <button onclick="deleteUser('${child.key}')">
        حذف
        </button>
        </div>
        `;

    });

});


// حذف کاربر
window.deleteUser=function(id){

if(confirm("حذف شود؟")){
remove(ref(db,"users/"+id));
}

      }
