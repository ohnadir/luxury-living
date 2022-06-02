import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-ezbBOfVfTH-RQd4ehHyPoSrDBI944N0",
  authDomain: "luxury-living-27ce6.firebaseapp.com",
  projectId: "luxury-living-27ce6",
  storageBucket: "luxury-living-27ce6.appspot.com",
  messagingSenderId: "547150409943",
  appId: "1:547150409943:web:323b7dc62bb925f8d24092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;