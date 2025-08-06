import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAFpMHaHabCvlmO5BvbgKIRsEBt4BtJ9K0",
  authDomain: "feva-hotel.firebaseapp.com",
  databaseURL: "https://feva-hotels-default-rtdb.firebaseio.com",
  projectId: "feva-hotel",
  storageBucket: "feva-hotel.appspot.com",
  messagingSenderId: "805719023406",
  appId: "1:805719023406:web:283442e30ede417f9b24bf",
  measurementId: "G-QQXQED1XWL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }; // ✅ THIS is what was missing!
