const btn = document.getElementById("ctaBtn");

if (btn) {
  btn.addEventListener("click", () => {
    alert("Du klickade 🚀");
  });
}

window.addEventListener("load", () => {
  console.log("Sidan laddad");
});
