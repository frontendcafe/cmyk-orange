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

//Verifico datos del LocalStorage luego de registrado y creado en firestore el User
auth.onAuthStateChanged((user) => {
  if (user) {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const uid = localStorage.getItem("uid");
    const userPhoto = localStorage.getItem("userPhoto");
    const aboutMe = JSON.parse(localStorage.getItem("aboutMe").toString());

    console.log(name);
    console.log(email);
    console.log(uid);
    console.log(userPhoto);
    console.log(aboutMe);
  } else {
    console.log("No se registro ningún usuario");
  }
});
