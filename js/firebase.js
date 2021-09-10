// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_yF5Y90-GsKfO7fZWmS6OQFv5Gj7B8a8",
  authDomain: "cmyk-orange.firebaseapp.com",
  projectId: "cmyk-orange",
  storageBucket: "cmyk-orange.appspot.com",
  messagingSenderId: "179241068454",
  appId: "1:179241068454:web:5e1763ec4bbee8ef5d5167",
};

// // Inicializando Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseConfig);
const db = firebase.firestore();
//Conocer si el usuario esta o no logueado
// const isAuth = onAuthStateChanged(auth, (user) => {
//   if (user !== null) {
//     console.log("logged in"); //
//   } else {
//     console.log("No user");
//   }
// });

//Obtener la data de firebase
db.collection("proyecto")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((file) => {
      console.log(file.data);
    });
  });
