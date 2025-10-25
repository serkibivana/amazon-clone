import firebase from "firebase/compat/app"

import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoTjn4yo4ib28TU0ue4r8ZtkDfY6ZdWZg",
  authDomain: "clone-2025-f24aa.firebaseapp.com",
  projectId: "clone-2025-f24aa",
  storageBucket: "clone-2025-f24aa.firebasestorage.app",
  messagingSenderId: "221593484139",
  appId: "1:221593484139:web:e31383efa1a98b62e06a2e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db =app.firestore(app)