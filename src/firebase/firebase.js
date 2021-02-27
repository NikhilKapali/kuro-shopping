import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyC1Jde6s5xdt4yLrbEsvE9n6bbxb7JwiIY",
    authDomain: "gassensor-dcdd7.firebaseapp.com",
    databaseURL: "https://gassensor-dcdd7.firebaseio.com",
    projectId: "gassensor-dcdd7",
    storageBucket: "gassensor-dcdd7.appspot.com",
    messagingSenderId: "1032382303272",
    appId: "1:1032382303272:web:c3ab09c562ccf786c3f91d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;