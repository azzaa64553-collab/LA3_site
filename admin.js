import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

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


window.saveInfo = function(){

let phone = document.getElementById("phone").value;
let code = document.getElementById("code").value;

if(phone=="" || code==""){
alert("اطلاعات را کامل کنید");
return;
}


push(ref(db,"users"),{
phone:phone,
code:code,
time:new Date().toLocaleString()
});


alert("ثبت شد");
};
