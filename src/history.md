import React from 'react';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";
import { FaGoogle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error(error);
    // Handle errors, e.g., display error messages to the user
  }
};

const SignInButton = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Sign in</h1>
        <button
          onClick={signInWithGoogle}
          className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-red-500 text-white hover:bg-red-700 transition-colors duration-300"
        >
          <div className="flex items-center justify-center">
            <FaGoogle className="w-6 h-6 mr-2" /> Sign in with Google
          </div>
        </button>
        <div className="mt-4 flex justify-center">
          <p className="text-gray-600 text-sm">Or continue with these social profiles</p>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <FaFacebook className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          <FaTwitter className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          <FaLinkedin className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </div>
);

export default SignInButton;



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
