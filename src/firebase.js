import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzjWPQkOmWtHC0l6JaTH5eqjSZ81kr-LI",
    authDomain: "c-cube-32c48.firebaseapp.com",
    databaseURL: "https://c-cube-32c48-default-rtdb.firebaseio.com",
    projectId: "c-cube-32c48",
    storageBucket: "c-cube-32c48.appspot.com",
    messagingSenderId: "643579987935",
    appId: "1:643579987935:web:1fb06fbcf2cb5d174a666a",
    measurementId: "G-Q9TFWKND0P"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };