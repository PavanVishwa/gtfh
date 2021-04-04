var firebaseConfig = {
    apiKey: "AIzaSyBfKV10J7bDsKX5Tlv0MfdiR73IhhT-xX0",
    authDomain: "covid19-thgi.firebaseapp.com",
    databaseURL: "https://covid19-thgi-default-rtdb.firebaseio.com",
    projectId: "covid19-thgi",
    storageBucket: "covid19-thgi.appspot.com",
    messagingSenderId: "631395829108",
    appId: "1:631395829108:web:8b5589c77b66dc417bd821",
      };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
  msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
     like:0  
 });