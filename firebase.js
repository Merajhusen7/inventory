// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Vz9RUQvixNKsLrPzYMcDBZDCHim3WYM",
  authDomain: "secondproject-4ccdd.firebaseapp.com",
  projectId: "secondproject-4ccdd",
  storageBucket: "secondproject-4ccdd.appspot.com",
  messagingSenderId: "844893006232",
  appId: "1:844893006232:web:278de0424a4ab49bade3ed",
  measurementId: "G-B5RB6CDG1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize firesotre
export const firestore = getFirestore(app);



