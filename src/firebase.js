 import * as firebase from 'firebase'
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAUNrvtUMpnjc1WmbPqH4QTfPi3ylB06e4",
    authDomain: "crud-firebase-6910e.firebaseapp.com",
    databaseURL: "https://crud-firebase-6910e.firebaseio.com",
    projectId: "crud-firebase-6910e",
    storageBucket: "crud-firebase-6910e.appspot.com",
    messagingSenderId: "867309347038",
    appId: "1:867309347038:web:f2b84c5484cfd1d214624f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();