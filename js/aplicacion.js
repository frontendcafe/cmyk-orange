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

/************ Boton de atrás ************/
// const goBack = document.querySelector("#goBack");
// goBack.addEventListener("click", (e) => {
//   Location.assign();
// });

/***** boton de Contactar *****/
// const formBtn = document.querySelector("#formBtn");

// formBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   db.collection("project").doc("OPGE5WRuwZhNMiSGQoCw").set();
// });
// db.collection("projects").doc("OPGE5WRuwZhNMiSGQoCw").set({
//   name: "Proyecto 45",
//   userId: "123",
// });
