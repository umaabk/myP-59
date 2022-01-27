var firebaseConfig = {
    apiKey: "AIzaSyAhQtZYSVdyxRC9yCqNh70LGqDpM-nCFwc",
    authDomain: "covid-19faqs-qutp.firebaseapp.com",
    databaseURL: "https://covid-19faqs-qutp-default-rtdb.firebaseio.com",
    projectId: "covid-19faqs-qutp",
    storageBucket: "covid-19faqs-qutp.appspot.com",
    messagingSenderId: "736814851153",
    appId: "1:736814851153:web:d4adfc02b946a1698cc470"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
    window.location="index.html";
}
localStorage.getItem("get_name");
function addRoom(){
    addroom_name=document.getElementById("room_name").value ; 
    firebase.database().ref("/").child(addroom_name).update({
        purpose : "Room name"
    })  ;
    Room_names=document.getElementById("room_name").value;
    localStorage.setItem("room_name",Room_names);
}
