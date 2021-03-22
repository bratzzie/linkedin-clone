import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZvuIJKYpfI0xWUhJPZF96FegXZhcWOOg",
    authDomain: "blog-4c589.firebaseapp.com",
    databaseURL: "https://blog-4c589-default-rtdb.firebaseio.com",
    projectId: "blog-4c589",
    storageBucket: "blog-4c589.appspot.com",
    messagingSenderId: "1058672192895",
    appId: "1:1058672192895:web:c96cb13a37a872c0047e4a",
    measurementId: "G-QVFBTWN16Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };