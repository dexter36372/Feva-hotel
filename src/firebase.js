import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFpMHaHabCvlmO5BvbgKIRsEBt4BtJ9K0",
  authDomain: "feva-hotel.firebaseapp.com",
  projectId: "feva-hotel",
  storageBucket: "feva-hotel.firebasestorage.app",
  messagingSenderId: "805719023406",
  appId: "1:805719023406:web:283442e30ede417f9b24bf",
  measurementId: "G-QQXQED1XWL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
