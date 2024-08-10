// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ejcSh6Fh7n1zW7cdmcCoJ8hbpZ-tvFQ",
  authDomain: "inventory-management-72417.firebaseapp.com",
  projectId: "inventory-management-72417",
  storageBucket: "inventory-management-72417.appspot.com",
  messagingSenderId: "635864936074",
  appId: "1:635864936074:web:3f11edcc04ac136df08773",
  measurementId: "G-7JRVS7BMGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}