//Config firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_yF5Y90-GsKfO7fZWmS6OQFv5Gj7B8a8",
  authDomain: "cmyk-orange.firebaseapp.com",
  projectId: "cmyk-orange",
  storageBucket: "cmyk-orange.appspot.com",
  messagingSenderId: "179241068454",
  appId: "1:179241068454:web:5e1763ec4bbee8ef5d5167",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Signin with email and password
const signInForm = document.querySelector("#signInForm");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email, password);
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      signInForm.reset();
      console.log("sign in");
      window.location.assign(`/index.html`);
    })
    .catch((e) => {
      alert("Necesitas estar registrado para inciar sesión");
    });
});

//Google Login
const googleButton = document.querySelector("#btn-inicio-google");
googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      signInForm.reset();
      console.log("google sign in");
      window.location.assign(`/index.html`);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Botón no tengo cuenta aún
const sinCuenta = document.querySelector("#sin-cuenta");

sinCuenta.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("No tengo cuenta aún");
  window.location.assign(`componentes/registroPaso1.html`);
});

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user is sign in");
  } else {
    console.log("No user is sign in");
  }
});
