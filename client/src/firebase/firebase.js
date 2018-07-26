/* <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script> */
  // Initialize Firebase
import firebase from 'firebase'; 

const config = {
    apiKey: "AIzaSyASwqwh48Cm2iusl_O5sv4ypHMv4JJK1WE",
    authDomain: "incrementalclicker.firebaseapp.com",
    databaseURL: "https://incrementalclicker.firebaseio.com",
    projectId: "incrementalclicker",
    storageBucket: "incrementalclicker.appspot.com",
    messagingSenderId: "726120650832"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;



// export const database = firebase.database();
// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
/* eslint-disable import/first */

// </script>