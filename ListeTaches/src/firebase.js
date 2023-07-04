import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDh40iOWTihAL4xEtJwYyLYGiaHkNx7J2k",
  authDomain: "fir-react-auth-6573e.firebaseapp.com",
  projectId: "fir-react-auth-6573e",
  storageBucket: "fir-react-auth-6573e.appspot.com",
  messagingSenderId: "767005112843",
  appId: "1:767005112843:web:cdac11335099b19845a50e",
  measurementId: "G-TZ4562RJRF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};