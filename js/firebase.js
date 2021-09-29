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

const projects = async () => {
  const res = await db.collection("project").doc("OPGE5WRuwZhNMiSGQoCw").get();
  console.log(res.data());
  return res.data();
};
projects();

/***** boton de Creá tu proyecto*****/
const createProject = document.querySelector("#createProject");

createProject.addEventListener("click", (e) => {
  e.preventDefault();
  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem("iD", user.uid);
      window.location.assign(`componentes/publicacion.html`);
    } else {
      // User is signed out
      alert("Primero debes acceder a tu cuenta o registrarte");
      window.location.assign(`login.html`);
    }
  });
});
/***** boton de Aplica a un Proyecto*****/
const applyProject = document.querySelector("#applyProject");

applyProject.addEventListener("click", (e) => {
  e.preventDefault();
  auth.onAuthStateChanged((user) => {
    if (user) {
      window.location.assign(`componentes/aplicar-proyecto.html`);
    } else {
      // User is signed out
      alert("Primero debes acceder a tu cuenta o registrarte");
      window.location.assign(`login.html`);
    }
  });
});

//boton de crear proyecto en Navbar
const createProj = document.querySelector("#createProj");
createProj.addEventListener("click", (e) => {
  e.preventDefault();
  auth.onAuthStateChanged((user) => {
    if (user) {
      window.location.assign(`componentes/publicacion.html`);
    } else {
      // User is signed out
      alert("Primero debes acceder a tu cuenta o registrarte");
      window.location.assign(`../login.html`);
    }
  });
});

//cambio de botón iniciar sesion (version mobile) por cerrar sesion en Navbar
firebase.auth().onAuthStateChanged((user) => {
  const logout = document.querySelector(".logout");
  if (user) {
    logout.innerHTML = "Cerrar Sesion";
    var uid = user.uid;
    console.log(uid);
  }
});

//cambio de botón iniciar sesion (version Desktop) por cerrar sesion en Navbar
firebase.auth().onAuthStateChanged((user) => {
  const logout2 = document.querySelector(".logout2");
  if (user) {
    logout2.innerHTML = "Cerrar Sesion";
    var uid = user.uid;
    console.log(uid);
  }
});

//Logout

//
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log("usuario activo");
//   } else {
//     console.log("usuario inactivo");
//   }
// });

//al hacer logout borrar del localstore
