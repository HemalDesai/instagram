// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC89tPiq842UGdX0TFmSD6bH1u2TT4q3uo",
  authDomain: "instagram-5364f.firebaseapp.com",
  projectId: "instagram-5364f",
  storageBucket: "instagram-5364f.appspot.com",
  messagingSenderId: "1043059195377",
  appId: "1:1043059195377:web:52a5ba75c0a79a5c521850"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {app,db,storage};