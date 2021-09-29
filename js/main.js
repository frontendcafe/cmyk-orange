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
