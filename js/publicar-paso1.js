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

//LocalStorage datos proyecto
const formBtn = document.querySelector("#formBtn");
const formProject = document.querySelector("#formProject");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameUser = document.querySelector("#formNombre").value;
  const emailProject = document.querySelector("#formEmail").value;
  const nombreProject = document.querySelector("#formNP").value;
  const descriptionProject = document.querySelector("#formDP").value;

  const usuario = JSON.parse(localStorage.getItem("user"));

  const project = {
    nameUser: nameUser,
    emailProject: emailProject,
    nombreProject: nombreProject,
    descriptionProject: descriptionProject,
    uid: usuario.uid,
  };

  console.log(project);

  localStorage.setItem("projects", JSON.stringify(project));

  formProject.reset();

  window.location.assign(`pub-paso2.html`);
});

// Comprobando el estado del usuario loggeado y su localStorage
auth.onAuthStateChanged((user) => {
  if (user) {
    const usuario = JSON.parse(localStorage.getItem("user"));
    console.log("user is sign in");
    console.log(usuario);
  } else {
    console.log("No user is sign in");
  }
});
