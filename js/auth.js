// Configuración de Firebase
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

// Crear un nuevo usuario

function isSamePassword(password, repeatepassword, email) {
  if (password === repeatepassword) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        //const user = userCredential.user;
        // ...
      });
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // ..
    //  });
  }
}

// Signup with email and password
const registrationForm = document.querySelector("#registrationForm");
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = registrationForm["email"].value;
  const userPassword = registrationForm["password"].value;
  const repeatePassword = registrationForm["repeatepassword"].value;
  auth.onAuthStateChanged((user) => {
    if (user) {
      alert("ya estas tenés la cuenta creada");
      console.log("user is sign in");
      window.location.assign(`../index.html`);
    } else {
      isSamePassword(userPassword, repeatePassword, userEmail);
      console.log("No user is sign in");
    }
  });
});
