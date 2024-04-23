import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "grabmypg-web.firebaseapp.com",
  projectId: "grabmypg-web",
  storageBucket: "grabmypg-web.appspot.com",
  messagingSenderId: "481151176766",
  appId: "1:481151176766:web:e823ab3de1a94e2494416f",
  measurementId: "G-2K55V82LPK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
