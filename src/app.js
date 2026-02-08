import {
  initializeApp,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "REEMPLAZA_CON_TU_API_KEY",
  authDomain: "REEMPLAZA_CON_TU_AUTH_DOMAIN",
  projectId: "REEMPLAZA_CON_TU_PROJECT_ID",
  storageBucket: "REEMPLAZA_CON_TU_STORAGE_BUCKET",
  messagingSenderId: "REEMPLAZA_CON_TU_MESSAGING_SENDER_ID",
  appId: "REEMPLAZA_CON_TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const status = document.getElementById("status");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const setStatus = (message) => {
  status.textContent = message;
};

const formatUser = (user) => {
  if (!user) {
    return "No hay usuario activo.";
  }
  return `Conectado: ${user.displayName || user.email || "Usuario"}`;
};

onAuthStateChanged(auth, (user) => {
  setStatus(formatUser(user));
});

document.getElementById("signup-button").addEventListener("click", async () => {
  setStatus("Creando cuenta...");
  try {
    await createUserWithEmailAndPassword(
      auth,
      signupEmail.value,
      signupPassword.value
    );
  } catch (error) {
    setStatus(`Error creando cuenta: ${error.message}`);
  }
});

document.getElementById("login-button").addEventListener("click", async () => {
  setStatus("Iniciando sesión...");
  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );
  } catch (error) {
    setStatus(`Error iniciando sesión: ${error.message}`);
  }
});

document.getElementById("google-button").addEventListener("click", async () => {
  setStatus("Abriendo Google...");
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    setStatus(`Error con Google: ${error.message}`);
  }
});

document.getElementById("logout-button").addEventListener("click", async () => {
  setStatus("Cerrando sesión...");
  try {
    await signOut(auth);
  } catch (error) {
    setStatus(`Error cerrando sesión: ${error.message}`);
  }
});
