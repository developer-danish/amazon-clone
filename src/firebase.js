// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD-jnoK9Qx0h5o1nxXo7vzb4Gh1vtsb2c0",
    authDomain: "challenge-b2925.firebaseapp.com",
    projectId: "challenge-b2925",
    storageBucket: "challenge-b2925.appspot.com",
    messagingSenderId: "562536838093",
    appId: "1:562536838093:web:4e769722ea0cfeb6adca84",
    measurementId: "G-DYSTBVJLPN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};