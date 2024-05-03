// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcwbjlnkAm1VjI6WDS_FcbL9hXh9ugxA",
  authDomain: "dog-tracker-3944e.firebaseapp.com",
  projectId: "dog-tracker-3944e",
  storageBucket: "dog-tracker-3944e.appspot.com",
  messagingSenderId: "173700743556",
  appId: "1:173700743556:web:ac3bef965ae077ae159dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);