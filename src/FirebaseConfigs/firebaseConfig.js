// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTUQQUnKo3BH0oMjF81cwOdUR7haY0l_0",
  authDomain: "care-all.firebaseapp.com",
  databaseURL:
    "https://care-all-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "care-all",
  storageBucket: "care-all.appspot.com",
  messagingSenderId: "724752273506",
  appId: "1:724752273506:web:88eabb93b7231d2f4b013b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
