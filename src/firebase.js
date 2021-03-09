import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyqJ5r40NwfDwyuQkLIjLBbfMkhzVGZdg",
  authDomain: "fir-5465c.firebaseapp.com",
  databaseURL: "https://fir-5465c.firebaseio.com",
  projectId: "fir-5465c",
  storageBucket: "fir-5465c.appspot.com",
  messagingSenderId: "817527769962",
  appId: "1:817527769962:web:dec4c7b7d49c7493a3f313",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
