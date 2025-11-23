import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB1eKMroada9EmIezdZTiE5fImzt-xsXII",
    authDomain: "desenvolvimento-de-proj-apli.firebaseapp.com",
    projectId: "desenvolvimento-de-proj-apli",
    storageBucket: "desenvolvimento-de-proj-apli.firebasestorage.app",
    messagingSenderId: "329983124881",
    appId: "1:329983124881:web:e89f828e85e97dbc3b2630",
    measurementId: "G-DH4TVPHK1F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Provider para login com Google
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
