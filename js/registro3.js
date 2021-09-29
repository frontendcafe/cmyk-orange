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

//Funcionalidades Tags -> Angie
const select = document.querySelector("#select");
const ulList = document.querySelector("#tags");

function deleteTag(btnX, element) {
  btnX.addEventListener("click", (e) => {
    e.preventDefault();
    element.remove();
  });
}

select.addEventListener("change", (e) => {
  const btnX = document.createElement("button");
  btnX.textContent = "X";
  btnX.setAttribute("type", "button");
  btnX.classList.add("btnX");

  const option = e.target.value;
  const li = document.createElement("li");
  ulList.appendChild(li);
  li.textContent = option;
  li.classList.add("tags");
  li.appendChild(btnX);
  //console.log(e.target.value);
  deleteTag(btnX, li);
});

//Verifico datos del LocalStorage luego de registrado y creado en firestore el User
auth.onAuthStateChanged((user) => {
  if (user) {
    const usuario = JSON.parse(localStorage.getItem("user"));
    console.log(usuario);
  } else {
    console.log("No se registro ningún usuario");
  }
});

const btnSubmit = document.querySelector("#btnSubmit");
const formSignUp = document.querySelector("#formSignUp");

btnSubmit.addEventListener("click", async (e) => {
  const redes1 = document.querySelector("#redes").value;
  const redes2 = document.querySelector("#redes1").value;
  e.preventDefault();
  formSignUp.reset();
  const tags = [];
  const redesUsuario = [];

  redesUsuario.push(redes1);
  redesUsuario.push(redes2);

  redesUsuario.forEach((r) => {
    console.log(r);
  });

  const liTags = ulList.querySelectorAll(":scope > li");

  liTags.forEach((li) => {
    const tag = li.textContent.slice(0, li.textContent.length - 1);
    tags.push(tag);
    console.log(tag);
  });

  const usuario = JSON.parse(localStorage.getItem("user"));
  usuario.tags = tags;
  usuario.redesUsuario = redesUsuario;

  console.log(usuario);

  await db.collection("Users").doc(usuario.uid).set(usuario);

  window.location.assign(`registroExitoso.html`);
});
