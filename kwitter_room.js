var firebaseConfig = {
      apiKey: "AIzaSyAQy1X87Klt0_KcTQpGbl_mLNbueMMYkvo",
      authDomain: "kwitter1-8be6e.firebaseapp.com",
      databaseURL: "https://kwitter1-8be6e-default-rtdb.firebaseio.com",
      projectId: "kwitter1-8be6e",
      storageBucket: "kwitter1-8be6e.appspot.com",
      messagingSenderId: "828726194502",
      appId: "1:828726194502:web:6b1670736d335f2f8f3547"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
