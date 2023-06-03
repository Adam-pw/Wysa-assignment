import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC91Syygf_ouhEOnkWJmaB56CUm7IHEm30",
  authDomain: "wysa-65761.firebaseapp.com",
  projectId: "wysa-65761",
  storageBucket: "wysa-65761.appspot.com",
  messagingSenderId: "726888455973",
  appId: "1:726888455973:web:296ba748ad17352c5044cc",
  measurementId: "G-GVMNJZJ43L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)