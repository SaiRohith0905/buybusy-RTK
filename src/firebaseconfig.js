// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtHGcYXW7E18zb72Pq4vmZ8msBS5Wbm3A",
  authDomain: "buybusy-86ba6.firebaseapp.com",
  projectId: "buybusy-86ba6",
  storageBucket: "buybusy-86ba6.firebasestorage.app",
  messagingSenderId: "908623443200",
  appId: "1:908623443200:web:572004e0e26a5a51c1afe5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
