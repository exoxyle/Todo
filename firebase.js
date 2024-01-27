// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRTARkSyyuf8O6S5pBvQovpHok6oye6xE",
  authDomain: "todo-69b1e.firebaseapp.com",
  projectId: "todo-69b1e",
  storageBucket: "todo-69b1e.appspot.com",
  messagingSenderId: "233262624650",
  appId: "1:233262624650:web:e7a4f141d909ecf3366273",
  measurementId: "G-VES9PNPCYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
