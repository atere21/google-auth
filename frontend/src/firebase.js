 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD1CWYGtQGVhZurMM-472aiJdDAcH8xo1A",
   authDomain: "auth-39d8c.firebaseapp.com",
   projectId: "auth-39d8c",
   storageBucket: "auth-39d8c.appspot.com",
   messagingSenderId: "677860186061",
   appId: "1:677860186061:web:db0029c3da44242b751684"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)