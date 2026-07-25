import { auth } from "./firebase-config.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.innerHTML = `Logged in as:<br><b>${user.email}</b>`;
  } else {
    window.location.href = "login.html";
  }
});
