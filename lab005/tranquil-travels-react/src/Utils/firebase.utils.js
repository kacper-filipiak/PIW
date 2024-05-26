import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { signOut, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBREd-eF2rjBF-7gZ20dSf-rV7fGatlqbA",
  authDomain: "tranquil-hotels.firebaseapp.com",
  projectId: "tranquil-hotels",
  storageBucket: "tranquil-hotels.appspot.com",
  messagingSenderId: "98724466213",
  appId: "1:98724466213:web:c4091d5539306aee3439cc",
  measurementId: "G-RVBTFHPPDL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth();

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt : "select_account "
});



const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (navigate) =>{
  const userCredentials = await signInWithPopup(auth, googleProvider);
  if(userCredentials.user) navigate("/");
}

export const logout = async () => {
  signOut(auth);
}

export const useUser = () => {

  const [user, setUser] = useState(auth?.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged( u => setUser(u));
  }, [])

  return user;
}





