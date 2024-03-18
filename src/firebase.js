import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWO4_irTkzC6Okbbg-tkWNqZIB1bGvGUA",
  authDomain: "grabmypg-test.firebaseapp.com",
  projectId: "grabmypg-test",
  storageBucket: "grabmypg-test.appspot.com",
  messagingSenderId: "887430203676",
  appId: "1:887430203676:web:64492526841d2a1dde52d9",
  measurementId: "G-QMKCDQC2M6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
