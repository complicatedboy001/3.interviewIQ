
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-87c6e.firebaseapp.com",
  projectId: "interviewiq-87c6e",
  storageBucket: "interviewiq-87c6e.firebasestorage.app",
  messagingSenderId: "894922745737",
  appId: "1:894922745737:web:02f6019c0900dea8d3a358"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}