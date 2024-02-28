import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsFOfRzrZ6NKtNDcZp5oJfNB1m9jAZscQ",
  authDomain: "react-proyectofinal-nikestore.firebaseapp.com",
  projectId: "react-proyectofinal-nikestore",
  storageBucket: "react-proyectofinal-nikestore.appspot.com",
  messagingSenderId: "209476934557",
  appId: "1:209476934557:web:8654ce50439be9f2e06d74"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);