// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos
  const hamburgerBtn = document.querySelector("#hamburger-btn");
  const navMenu = document.querySelector("#nav-menu");

  // Verificar si los elementos existen
  if (hamburgerBtn && navMenu) {
    // Añadir el event listener para el click
    hamburgerBtn.addEventListener("click", function () {
      // Toggle de las clases active
      this.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Log para debugging
      console.log("Hamburger clicked");
      console.log("Hamburger active:", this.classList.contains("active"));
      console.log("Menu active:", navMenu.classList.contains("active"));
    });
  }
});

//Codigo texto colapsable

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}