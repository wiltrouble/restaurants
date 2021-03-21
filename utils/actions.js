import { firebaseApp } from "./firebase";
import * as firebase from 'firebase';
import "firebase/firestore";

const db = firebaseApp.firestore(firebaseApp);

export const isUserLogged = () => {
    let isLogged = false;
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
        user !== null ? isLogged=true : isLogged = false
        console.log(isLogged)
        return isLogged;
    })
}