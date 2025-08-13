import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeTGIyEMRe4o5VVzkrkfkUezuD1Dmp-Vo",
  authDomain: "sistema-de-login-3341a.firebaseapp.com",
  projectId: "sistema-de-login-3341a",
  storageBucket: "sistema-de-login-3341a.firebasestorage.app",
  messagingSenderId: "662102832557",
  appId: "1:662102832557:web:843b799bcf722dbc7c9d24"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);