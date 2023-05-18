// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqN9MdI1KAZtKB7pZuAfzBs5Y_xAa5_Bg",
    authDomain: "brain-boosters-project.firebaseapp.com",
    projectId: "brain-boosters-project",
    storageBucket: "brain-boosters-project.appspot.com",
    messagingSenderId: "802388134448",
    appId: "1:802388134448:web:8e0fac2142dd9e88e57bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;