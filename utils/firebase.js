import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDj7Mn84by9-89vNFI-nt6IYGrpbNc3Ubo",
    authDomain: "restaurants-e9492.firebaseapp.com",
    projectId: "restaurants-e9492",
    storageBucket: "restaurants-e9492.appspot.com",
    messagingSenderId: "657510526871",
    appId: "1:657510526871:web:c609a2de621c38df989ed2"
}


export const firebaseApp = firebase.initializeApp(firebaseConfig);