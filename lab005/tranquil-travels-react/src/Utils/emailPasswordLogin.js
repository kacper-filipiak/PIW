import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.utils.js";

export const createUserWithEmailPassword = async (navigate, email, password) =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    if(user) navigate("/");
  });
}

export const loginUserWithEmailPassword = async (navigate, email, password) =>{
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user) navigate("/");
  });
}
