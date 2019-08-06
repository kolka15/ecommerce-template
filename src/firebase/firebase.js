import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDT6wAmtJC1oyxINyuVmylfUp42J7Fy7YQ",
    authDomain: "crwn-db-af805.firebaseapp.com",
    databaseURL: "https://crwn-db-af805.firebaseio.com",
    projectId: "crwn-db-af805",
    storageBucket: "",
    messagingSenderId: "797292889190",
    appId: "1:797292889190:web:3d576eebd84976f9"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log (
                'error creating user', e.message
            );
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;