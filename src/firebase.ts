// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCr3hFntblfgzJguiNrHrhhn5cFf5tAc0M",
    authDomain: "collectionsmanager-87959.firebaseapp.com",
    projectId: "collectionsmanager-87959",
    storageBucket: "collectionsmanager-87959.firebasestorage.app",
    messagingSenderId: "833436457168",
    appId: "1:833436457168:web:38e266a6437579028aa6d5",
    measurementId: "G-H7G7TGQF9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);