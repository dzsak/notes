// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "notebook-32a7c.firebaseapp.com",
  projectId: "notebook-32a7c",
  storageBucket: "notebook-32a7c.appspot.com",
  messagingSenderId: "988902897459",
  appId: "1:988902897459:web:a0eae28aa163b2e608f046",
  measurementId: "G-PJEQWG4LJ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
