// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBIPfhBnAZ8W3k7rzMSnDrJ7T1mrqcXQs",
  authDomain: "lakshit-nexzon.firebaseapp.com",
  projectId: "lakshit-nexzon",
  storageBucket: "lakshit-nexzon.appspot.com",
  messagingSenderId: "597917108064",
  appId: "1:597917108064:web:8d64cf6e4a06e6d0a4c005",
  measurementId: "G-7QSKPBFVCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
