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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;