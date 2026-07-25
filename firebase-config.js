import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBG3XWczK9NHIAVz4xA9Lc22qRV31YoVd8",
  authDomain: "vishal-consulting-22aab.firebaseapp.com",
  projectId: "vishal-consulting-22aab",
  storageBucket: "vishal-consulting-22aab.firebasestorage.app",
  messagingSenderId: "347692393673",
  appId: "1:347692393673:web:2160e31d38c9b0d752918"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
