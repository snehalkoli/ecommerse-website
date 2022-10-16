import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnaS0ndL8HmyKTTy_4Mrrgyfou0LVucKM",
    authDomain: "r3shop-1d907.firebaseapp.com",
    projectId: "r3shop-1d907",
    storageBucket: "r3shop-1d907.appspot.com",
    messagingSenderId: "1056490215203",
    appId: "1:1056490215203:web:77698547e0f873331b5e96",
    measurementId: "G-NENY307TKT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

