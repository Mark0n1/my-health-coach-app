import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFbWgNcmoVrHGasmUd09qPKlCqAHQS8ww",
  authDomain: "my-health-coach-app-firebase.firebaseapp.com",
  projectId: "my-health-coach-app-firebase",
  storageBucket: "my-health-coach-app-firebase.firebasestorage.app",
  messagingSenderId: "660691370384",
  appId: "1:660691370384:web:e54aaeaf13f06834913315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
