// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHh9gRxMMHnyj-P-G-72bbQ8Uh7VPZU8g",
  authDomain: "wsb120-quiz.firebaseapp.com",
  projectId: "wsb120-quiz",
  storageBucket: "wsb120-quiz.appspot.com",
  messagingSenderId: "338263744737",
  appId: "1:338263744737:web:980047963af3b3586297a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;