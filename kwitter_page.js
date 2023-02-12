var firebaseConfig = {
      apiKey: "AIzaSyDvmTLV6pZo9weV1GuK7F9QW4R2Xmk8WIU",
      authDomain: "kwitter-60997.firebaseapp.com",
      databaseURL: "https://kwitter-60997-default-rtdb.firebaseio.com",
      projectId: "kwitter-60997",
      storageBucket: "kwitter-60997.appspot.com",
      messagingSenderId: "706859354583",
      appId: "1:706859354583:web:9f9cc89593ec14ce4ae392",
      measurementId: "G-5MZKSVF4TD"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
console.log(msg);
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
