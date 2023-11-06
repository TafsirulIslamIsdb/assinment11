// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFY1DX5hBI1CUFuj2K2ZliEEgJZttzY8",
  authDomain: "b8a11-client-side-a777d.firebaseapp.com",
  projectId: "b8a11-client-side-a777d",
  storageBucket: "b8a11-client-side-a777d.appspot.com",
  messagingSenderId: "785253595617",
  appId: "1:785253595617:web:f0fd43daf43f2411917aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth