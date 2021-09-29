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
const aboutMe = document.querySelector("#textarea1");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const usuario = JSON.parse(localStorage.getItem("user"));
  console.log("uploadPhoto");
  console.log("aboutMe");
  usuario.userPhoto = uploadPhoto;
  usuario.aboutMe = aboutMe.value;

  localStorage.setItem("user", JSON.stringify(usuario));

  window.location.assign(`registroPaso3.html`);
});

//Verifico UID luego de registrado y creado en firestore el User
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Se registró ningún usuario");
  } else {
    console.log("No se registro ningún usuario");
  }
});
