import firebase from "firebase/compat/app"

import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY2g7010TAWUSyv546O58kK0QkLhGgkJ0",
  authDomain: "clone-2025-c078a.firebaseapp.com",
  projectId: "clone-2025-c078a",
  storageBucket: "clone-2025-c078a.firebasestorage.app",
  messagingSenderId: "60816653576",
  appId: "1:60816653576:web:6a9f9d7077ee4adf5cc0bd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db =app.firestore(app)