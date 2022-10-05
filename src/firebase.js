import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC9-yB4O4nnannniNxPIKNRgJoLfA8w1wI",
  authDomain: "instagram-clone-f6068.firebaseapp.com",
  projectId: "instagram-clone-f6068",
  storageBucket: "gs://instagram-clone-f6068.appspot.com",
  messagingSenderId: "185921858601",
  appId: "1:185921858601:web:96eb20ac4d802e6d338038",
  measurementId: "G-LW5YVX9F8M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);