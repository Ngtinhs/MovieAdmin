import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDHhR2rHKW69GFdPZGxwox6UKj7qENKIfY",
    authDomain: "movies-1438c.firebaseapp.com",
    projectId: "movies-1438c",
    storageBucket: "movies-1438c.appspot.com",
    messagingSenderId: "166070431692",
    appId: "1:166070431692:web:12b3fab4820cd9527ef769",
    measurementId: "G-G1J820DK2E"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;