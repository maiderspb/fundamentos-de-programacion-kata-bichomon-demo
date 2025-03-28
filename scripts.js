console.log(document.title);
document.querySelector("#gen-1").textContent = "Generasión 1 Pokimon";
document.querySelector(".infocard-list").style.backgroundColor = "#FFD700";
console.log(document.URL);
console.log(document.domain);
const imagenes = document.querySelectorAll("img");
console.log("Lista de imágenes:", imagenes);
imagenes.forEach(
  (img) => (img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
);
document.querySelectorAll(".infocard-lg-data.text-muted").forEach((card) => {
  if (card.innerText.includes("Flying")) {
    card.style.backgroundColor = "#87CEEB";
  }
});
