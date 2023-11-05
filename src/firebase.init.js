// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyDBJpth4qmfb_PQjpSykdJHJis7uWaPhlg",
  authDomain: "twitter-clone-10058.firebaseapp.com",
  projectId: "twitter-clone-10058",
  storageBucket: "twitter-clone-10058.appspot.com",
  messagingSenderId: "712506182899",
  appId: "1:712506182899:web:6cb91796e8b50626b7bb86",
  measurementId: "G-QGNEDVCD77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;