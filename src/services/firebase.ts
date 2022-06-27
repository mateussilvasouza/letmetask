import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_API_API_KEY,
  authDomain: process.env.REACT_API_AUTH_DOMAIN,
  databaseURL: process.env.REACT_API_DATABASE_URL,
  projectId: process.env.REACT_API_PROJECT_ID,
  storageBucket: process.env.REACT_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_API_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getDatabase();