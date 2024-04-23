



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase config object here
  apiKey: "AIzaSyCvwjXosipRr2s_gM-gw5eLDCxABrH6lc4",
  authDomain: "dailyplanner-1f754.firebaseapp.com",
  databaseURL: "https://dailyplanner-1f754-default-rtdb.firebaseio.com",
  projectId: "dailyplanner-1f754",
  storageBucket: "dailyplanner-1f754.appspot.com",
  messagingSenderId: "953138719540",
  appId: "1:953138719540:web:c743713d209241555e5361",
  measurementId: "G-96SF6YGF8G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };


