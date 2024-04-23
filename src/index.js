// Index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignInButton from "./SignInButton"; // Import the SignInButton component
import { BrowserRouter } from 'react-router-dom';
import { auth, signOutUser } from './auth'; // Remove import of signInWithGoogle

const year = new Date().getFullYear();

const AuthenticatedApp = () => (
  <BrowserRouter>
    <React.StrictMode>
      <Navbar signOut={signOutUser} />
      <App />
      <Footer var={year} />
    </React.StrictMode>
  </BrowserRouter>
);

const Index = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <AuthenticatedApp /> : <SignInButton />}
    </div>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

reportWebVitals();
