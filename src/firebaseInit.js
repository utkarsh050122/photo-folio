// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyLEZF5duLDjjIyUBbNTElwEKsviF2zlQ",
  authDomain: "photo-portfolio-4b4b9.firebaseapp.com",
  projectId: "photo-portfolio-4b4b9",
  storageBucket: "photo-portfolio-4b4b9.appspot.com",
  messagingSenderId: "789960281543",
  appId: "1:789960281543:web:3455bffa250353370b5de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);