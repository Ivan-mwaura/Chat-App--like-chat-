import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYheUs5MuUHZ0a46VrjyzKsYiUxU5imKc",
  authDomain: "like-chat-4873e.firebaseapp.com",
  projectId: "like-chat-4873e",
  storageBucket: "like-chat-4873e.appspot.com",
  messagingSenderId: "473958294844",
  appId: "1:473958294844:web:beefefac99cc08041dea39",
  measurementId: "G-BC0G3J9GTS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
