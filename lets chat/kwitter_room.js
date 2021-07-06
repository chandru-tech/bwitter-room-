 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyB0_tDrkFwI5SJECsViTcEnoEvVMJyQCNM",
      authDomain: "classtest-e891d.firebaseapp.com",
      projectId: "classtest-e891d",
      storageBucket: "classtest-e891d.appspot.com",
      messagingSenderId: "316826033182",
      appId: "1:316826033182:web:edbb47c4a82741c972620f",
      measurementId: "G-4B7ST6J24T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
