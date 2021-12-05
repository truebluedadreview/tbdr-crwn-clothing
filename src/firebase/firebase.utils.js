import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAllf1huBrFmfIQ7emPrOkFP9f_Fcmt3qQ",
    authDomain: "crwn-db-7efe7.firebaseapp.com",
    projectId: "crwn-db-7efe7",
    storageBucket: "crwn-db-7efe7.appspot.com",
    messagingSenderId: "1083610813921",
    appId: "1:1083610813921:web:fdbb3060ac039f086faea0",
    measurementId: "G-83CRM332B5"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;