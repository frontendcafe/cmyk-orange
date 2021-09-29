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

const formBtnPubp2 = document.querySelector("#formBtnPubp2");

formBtnPubp2.addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    const link1 = document.querySelector("#link1").value;
    const link2 = document.querySelector("#link2").value;

    const linksProject = [];
    linksProject.push(link1);
    linksProject.push(link2);
    const usuario = JSON.parse(localStorage.getItem("user"));
    const project = JSON.parse(localStorage.getItem("projects"));
    project.linksProject = linksProject;

    console.log(project);
    await db.collection("Projects").add(project);

    window.location.assign(`pubExitosa.html`);
  } catch (e) {
    console.log(e);
  }
});

// Comprobando el estado del usuario loggeado y su localStorage
auth.onAuthStateChanged((user) => {
  if (user) {
    const usuario = JSON.parse(localStorage.getItem("user"));
    const project = JSON.parse(localStorage.getItem("projects"));
    console.log("user is sign in");
    console.log(usuario);
    console.log(project);
  } else {
    console.log("No user is sign in");
  }
});

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

/************** Publicacion paso 2 - end ***************/
