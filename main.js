firebase.auth().onAuthStateChanged(user => {
  const page = window.location.pathname.split("/").pop();
  if (!user && page !== "index.html") {
    window.location.href = "index.html";
  }
});

function logout() {
  auth.signOut().then(()=>window.location.href="index.html");
}
