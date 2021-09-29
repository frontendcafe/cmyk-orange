/************** About us - start ***************/

/************** Popper Js - Desktop - start ***************/

/* Inicializacion del Popper Js - start */
const numTeam = 4; // cantidad de personas en el Equipo

for (let i = 1; i <= numTeam; i++) {
  // inicializa el POPPER JS para el TOOLTIP de cada miembro del equipo
  const buttonx = document.querySelector("#teamBtn" + i);
  const tooltipx = document.querySelector("#tooltip" + i);

  const popperInstancex = Popper.createPopper(buttonx, tooltipx, {
    placement: "top-start",
  });
}
/* Inicializacion del Popper Js - end */

/* Boton "Leer mas" - start */
let contBtn = 1; // contador de click en boton "Leer mas"

$(".teamBtn").click(function () {
  // click en boton LEER MAS
  if (contBtn == 1) {
    $(this).siblings().show(); // muestra tooltip en 1er click
    contBtn++;
  } else if (contBtn == 2) {
    $(".tool").hide(); // oculta tooltip en 2do click
    contBtn = 1;
  }
});
/* Boton "Leer mas" - end */

/************** Popper Js - Desktop - end ***************/

/************** Popper Js - Mobile - start ***************/

/* Inicializacion del Popper Js - start */
const numTeam2 = 3; // cantidad de personas en el Equipo

for (let i = 1; i <= numTeam2; i++) {
  // inicializa el POPPER JS para el TOOLTIP de cada miembro del equipo
  const buttony = document.querySelector("#mobBtn" + i);
  const tooltipy = document.querySelector("#toolmob" + i);

  const popperInstancey = Popper.createPopper(buttony, tooltipy, {
    placement: "top-start",
  });
}
/* Inicializacion del Popper Js - end */

/* Boton "Leer mas" - start */
let contmobBtn = 1; // contador de click en boton "Leer mas"

$(".aboutBtn").click(function () {
  // click en boton LEER MAS
  if (contmobBtn == 1) {
    $(this).siblings().show(); // muestra tooltip en 1er click
    contmobBtn++;
  } else if (contmobBtn == 2) {
    $(".tool").hide(); // oculta tooltip en 2do click
    contmobBtn = 1;
  }
});
/* Boton "Leer mas" - end */

/************** Popper Js - Mobile - end ***************/

/**************Firebase ***************/
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
  if (user) {
    const logout = document.querySelector(".logout");
    logout.innerHTML = "Cerrar Sesion";
    var uid = user.uid;
    console.log(uid);
  } else {
    logout.innerHTML = "Iniciar Sesión";
  }
});

//cambio de botón iniciar sesion (version Desktop) por cerrar sesion en Navbar
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const logout2 = document.querySelector(".logout2");
    logout2.innerHTML = "Cerrar Sesion";
    var uid = user.uid;
    console.log(uid);
  } else {
    logout.innerHTML = "Iniciar Sesión";
  }
});
/************** About us - end ***************/
