import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
    // No need to handle user data here since it will be handled after redirection
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
