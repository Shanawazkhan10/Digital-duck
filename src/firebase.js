
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcBtbu-TLjxhdziz2dI70_HWZ6PUogWTU",
    authDomain: "final-project-b0dea.firebaseapp.com",
    projectId: "final-project-b0dea",
    storageBucket: "final-project-b0dea.appspot.com",
    messagingSenderId: "618188839662",
    appId: "1:618188839662:web:c04f7a48583fa1db3e71ff",
    measurementId: "G-CP9MQMZ9WR"
};

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt: "select_account "
});
// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);