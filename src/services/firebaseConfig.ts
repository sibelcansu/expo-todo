// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDgvcEpf9jFNt7z-LmUSklBiZjDvaFR-0",
  authDomain: "expo-todo-c61dc.firebaseapp.com",
  projectId: "expo-todo-c61dc",
  storageBucket: "expo-todo-c61dc.firebasestorage.app",
  messagingSenderId: "1044108028465",
  appId: "1:1044108028465:web:c247f91e94c9e1eed9c310",
  measurementId: "G-VLZQ5DPYN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app); 