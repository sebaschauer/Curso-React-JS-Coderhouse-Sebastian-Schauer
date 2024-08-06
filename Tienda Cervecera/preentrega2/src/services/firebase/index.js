
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCWu5yWbiWLuumBi6Ppq3qfUf6-bkhh-io",
  authDomain: "tienda-cervecera.firebaseapp.com",
  projectId: "tienda-cervecera",
  storageBucket: "tienda-cervecera.appspot.com",
  messagingSenderId: "259768861855",
  appId: "1:259768861855:web:5b45722640923f172c4eaa",
  measurementId: "G-5D9WD1PHXW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

 const db = getAuth(app);
