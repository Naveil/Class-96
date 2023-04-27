//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAV3ozsxfWN4mpH6f19UALLsBKV7u93vpk",
      authDomain: "kwitter-ac0e9.firebaseapp.com",
      databaseURL: "https://kwitter-ac0e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac0e9",
      storageBucket: "kwitter-ac0e9.appspot.com",
      messagingSenderId: "359884449268",
      appId: "1:359884449268:web:c6f841d30ec0332805c5a1",
      measurementId: "G-NK9JF59W9G"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

      function send(){
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
