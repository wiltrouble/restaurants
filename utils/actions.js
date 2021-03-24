import { firebaseApp } from "./firebase";
import * as firebase from 'firebase';
import "firebase/firestore";

const db = firebaseApp.firestore(firebaseApp);

export const isUserLogged = () => {
    let isLogged = false;
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}

export const closeSession = () => {
    return firebase.auth().signOut()
}

export const registerUser = async(email, password) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        result.statusResponse = false
        result.error = "This is mail can not be register, try with other please!"
    }
    return result;
}

export const loginWithEmailAndPassword = async(email, password) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        result.statusResponse = false
        result.error = "User or Password invalid!"
    }
    return result;
}