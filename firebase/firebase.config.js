// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtA8OuWJdiiAYmiYpHQpFhlbJ2v7-NSPw",
  authDomain: "innerquest-counseling-services.firebaseapp.com",
  projectId: "innerquest-counseling-services",
  storageBucket: "innerquest-counseling-services.appspot.com",
  messagingSenderId: "493753086273",
  appId: "1:493753086273:web:98b9d338c8dc6fa703f1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;