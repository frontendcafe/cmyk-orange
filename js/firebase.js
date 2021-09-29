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

/***** boton de Empieza ya *****/
const empiezaYa = document.querySelector("#btnStartNow");

empiezaYa.addEventListener("click", (e) => {
  e.preventDefault();
  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem("iD", user.uid);
      window.location.assign(`componentes/aplicar-proyecto.html`); //deberia ser buscarproyectos.html
    } else {
      // User is signed out
      alert("Primero debes acceder a tu cuenta o registrarte");
      window.location.assign(`login.html`);
    }
  });
});

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
      localStorage.setItem("iD", user.uid);
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
      localStorage.setItem("iD", user.uid);
      window.location.assign(`componentes/publicacion.html`);
    } else {
      // User is signed out
      alert("Primero debes acceder a tu cuenta o registrarte");
      window.location.assign(`../login.html`);
    }
  });
});

//cambio de botón iniciar sesion por cerrar sesion
auth.onAuthStateChanged((user) => {
  if (user) {
    const logout = document.querySelector("#logout");
    logout.innerHTML = "Cerrar Sesion";
    console.log(logout);
  }
});

//
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("usuario activo");
  } else {
    console.log("usuario inactivo");
  }
});
