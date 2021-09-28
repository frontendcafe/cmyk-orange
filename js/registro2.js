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

//Agregar datos en registroPaso2 para la collection Users
//Boton siguiente para ir registroPaso3 y almacenar en db photo y aboutMe->

const submitBtn = document.querySelector(".submitBtn");
const uploadPhoto = document.querySelector(".uploadPhoto");
const aboutMe = document.querySelector("#textarea");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("userPhoto", uploadPhoto);
  localStorage.setItem("aboutMe", JSON.stringify(aboutMe));
  window.location.assign(`registroPaso3.html`);
});

//Verifico UID luego de registrado y creado en firestore el User
auth.onAuthStateChanged((user) => {
  if (user) {
    const uid = localStorage.getItem("uid");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    console.log(uid);
    console.log(name);
    console.log(email);
  } else {
    console.log("No se registro ningún usuario");
  }
});
