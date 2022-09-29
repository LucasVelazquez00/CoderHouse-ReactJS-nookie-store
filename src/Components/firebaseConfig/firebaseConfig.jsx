// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGhVaKA8O4_NH9L08GUXm4B2EYQjBZQts",
  authDomain: "nookie-store.firebaseapp.com",
  projectId: "nookie-store",
  storageBucket: "nookie-store.appspot.com",
  messagingSenderId: "434663166305",
  appId: "1:434663166305:web:09130b8de11055434ff520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);