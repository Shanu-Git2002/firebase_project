// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6OFpfqV83UsGGjUmmM3fPOnK2BYiqGME",
  authDomain: "fir-projecrt-1c64b.firebaseapp.com",
  projectId: "fir-projecrt-1c64b",
  storageBucket: "fir-projecrt-1c64b.appspot.com",
  messagingSenderId: "868206373434",
  appId: "1:868206373434:web:bb4d8886eeca8b7adae303",
  measurementId: "G-BPPB5BGZTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
