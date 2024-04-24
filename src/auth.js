// auth.js

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    // Handle successful sign-in, e.g., update UI, store user data, etc.
  } catch (error) {
    console.error(error);
    // Handle errors, e.g., display error messages to the user
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    // Handle successful sign-out, e.g., update UI, clear user data, etc.
  } catch (error) {
    console.error(error);
    // Handle errors, e.g., display error messages to the user
  }
};

export { auth, signInWithGoogle, signOutUser };
