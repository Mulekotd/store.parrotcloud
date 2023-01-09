// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyA0El20sSSCokHJIlAomyIQ2pSzlGponq8",
  authDomain: "parrotcloud-5801b.firebaseapp.com",
  projectId: "parrotcloud-5801b",
  storageBucket: "parrotcloud-5801b.appspot.com",
  messagingSenderId: "541246559120",
  appId: "1:541246559120:web:8fa3a607c2ccfc4f7d5915",
  measurementId: "G-WVRGY85NET",
}

// Initialize Firebase
const application = initializeApp(config);
export const analytics = getAnalytics(application);
export const auth = getAuth(application);
export const database = getDatabase(application);
export const storage = getStorage(application);
export default application;