import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeXnGsDqTIEd8vxUsInnU9LTSyCeJS-kQ",
  authDomain: "apex-c502d.firebaseapp.com",
  databaseURL: "https://apex-c502d-default-rtdb.firebaseio.com",
  projectId: "apex-c502d",
  storageBucket: "apex-c502d.firebasestorage.app",
  messagingSenderId: "33849562834",
  appId: "1:33849562834:web:b9803394bd080a7e347f0b",
  measurementId: "G-G1JBCDVJJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Realtime Database instance
export const db = getDatabase(app);

// Helper to add a record
export const addRealtimeDocument = async (path, data) => {
  const newRef = push(ref(db, path)); // auto-generate unique key
  await set(newRef, data);
};


