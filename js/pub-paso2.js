/************** Publicacion paso 2 - start ***************/

/* Select change listener - start */
$("#formSelect").change(function () {
  // Se activa ante cualquier cambio o seleccion del SELECT
  var seleccion = $("#formSelect option:selected").text(); // el "texto" de la opcion seleccionada se almacena en la variable "seleccion"

  // se relaciona los nombres de los ID de cada una de la opciones a seleccionar y los ID de las etiquetas de lenguajes a mostrar o ocultar
  $("#span" + seleccion).show(); // muestra ID de etiqueta
  $("#span" + seleccion)
    .siblings()
    .show(); // muestra al hermano del ID de etiqueta
  $("#span" + seleccion)
    .parent()
    .show(); // muestra al padre del ID de etiqueta
});
/* Select change listener - end */

/* Ocultar etiqueta con "x" - start */
$(".btnClose").click(function () {
  // Se activa ante un click en "x" de la etiqueta... <b class="btn btnClose">x</b>
  $(this).parent().hide(); // oculta al padre de class="btnClose" de ESTE (this) instante... posible caso: el padre seria <div class="input-group mb-3"> Si se oculta al padre, por ende, se ocultan los hijos
});
/* Ocultar etiqueta con "x" - end */

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
      localStorage.setItem("iD", user.uid);
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
/************** Publicacion paso 2 - end ***************/
