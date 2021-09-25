import auth from "./login";

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user is sign in");
  } else {
    console.log("No user is sign in");
  }
});
