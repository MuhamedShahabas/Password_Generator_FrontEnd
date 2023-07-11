import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_APIKEY,
  authDomain: env.VITE_AUTHDOMAIN,
  projectId: env.VITE_PROJECTID,
  storageBucket: env.VITE_STORAGEBUCKET,
  messagingSenderId: env.VITE_MSID,
  appId: env.VITE_ID,
  measurementId: env.VITE_MEASUREID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, collection, addDoc, getDocs, deleteDoc, doc };
