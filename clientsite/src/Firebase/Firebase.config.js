// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUdlkFTqpr6xlZKyqt03UBNsS-iqDVHjA",
    authDomain: "coffee-heaven-e7adf.firebaseapp.com",
    projectId: "coffee-heaven-e7adf",
    storageBucket: "coffee-heaven-e7adf.appspot.com",
    messagingSenderId: "1581515202",
    appId: "1:1581515202:web:6a6f12149e349726ad165b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;