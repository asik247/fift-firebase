// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1hMYCgOSx70na4f8gEo9Kfq8nZDyYdEc",
  authDomain: "fift-firebase.firebaseapp.com",
  projectId: "fift-firebase",
  storageBucket: "fift-firebase.firebasestorage.app",
  messagingSenderId: "692122338067",
  appId: "1:692122338067:web:7fc62d8aef003d494950e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);