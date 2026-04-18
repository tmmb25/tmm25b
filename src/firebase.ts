import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBINaaDHvEYUef4kvVBoZ9aHTCp0j9dXfU",
  authDomain: "galeri-kenangan-87c88.firebaseapp.com",
  projectId: "galeri-kenangan-87c88",
  storageBucket: "galeri-kenangan-87c88.firebasestorage.app",
  messagingSenderId: "615240295304",
  appId: "1:615240295304:web:f0787e000c4ea7c2c8103d",
  measurementId: "G-4JRCQTZBFL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
