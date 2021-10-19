import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtJHEf5qHnzKQd5eoKT4hUA886n_FsoGA",
  authDomain: "app-autos-cfb59.firebaseapp.com",
  projectId: "app-autos-cfb59",
  storageBucket: "app-autos-cfb59.appspot.com",
  messagingSenderId: "1069173870379",
  appId: "1:1069173870379:web:d6f4b8c75b615a70a97f6e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvide= new firebase.auth.GoogleAuthProvider();
export{
  db,
  googleAuthProvide,
  firebase
}

