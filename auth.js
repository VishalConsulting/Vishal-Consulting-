import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.style.color = "green";
      message.innerText = "Login Successful!";
      window.location.href = "dashboard.html";
    } catch (error) {
      message.style.color = "red";
      message.innerText = error.message;
    }
  });
}

// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      message.style.color = "green";
      message.innerText = "Account Created!";
      window.location.href = "dashboard.html";
    } catch (error) {
      message.style.color = "red";
      message.innerText = error.message;
    }
  });
}

// FORGOT PASSWORD
const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {
  forgotForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    try {
      await sendPasswordResetEmail(auth, email);
      message.style.color = "green";
      message.innerText = "Password reset email sent.";
    } catch (error) {
      message.style.color = "red";
      message.innerText = error.message;
    }
  });
}

// CHECK LOGIN
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("dashboard.html")) {
    if (!user) {
      window.location.href = "login.html";
    }
  }
});

// LOGOUT
window.logout = async function () {
  await signOut(auth);
  window.location.href = "login.html";
};
