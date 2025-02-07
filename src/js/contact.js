// Esperar a que el DOM esté completamente cargado
// para el menu hamburgesa
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const hamburgerBtn = document.querySelector('#hamburger-btn');
    const navMenu = document.querySelector('#nav-menu');
    
    // Verificar si los elementos existen
    if (hamburgerBtn && navMenu) {
        // Añadir el event listener para el click
        hamburgerBtn.addEventListener('click', function() {
            // Toggle de las clases active
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Log para debugging
            console.log('Hamburger clicked');
            console.log('Hamburger active:', this.classList.contains('active'));
            console.log('Menu active:', navMenu.classList.contains('active'));
        });
    }
});

document.getElementById("enviar").addEventListener("click", function () {
    // Obtén los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    errorBox.style.display = "none"; // Ocultar mensaje al iniciar
    errorBox.innerHTML = ""; // Limpiar mensaje anterior
    
    let errores = [];

    // Validar los campos
         if (nombre === "") {
            errores.push("Debes de poner un nombre de contacto.");
            document.getElementById("nombre").style.borderColor = "#FF0072";
         }else{
            document.getElementById("nombre").style.borderColor = "#ccc";
         }
         if (!esValidoCorreo(correo)) {
            errores.push("Introduce un correo válido. xxxxxx@xxxxxx.xxx");
            document.getElementById("correo").style.borderColor = "#FF0072";
         }else{
            document.getElementById("correo").style.borderColor = "#ccc";
         }

         if (mensaje === "") {
                errores.push("Te has olvidado de escribir el mensaje.");
                document.getElementById("mensaje").style.borderColor = "#FF0072";
         }else{
            document.getElementById("mensaje").style.borderColor = "#ccc";
         }
         if(errores.length>0) {
            errorBox.innerHTML = errores.join("<br>");
            errorBox.style.display = "block";
         }else{

         
            document.getElementById("mensajeExito").style.display = "block"; 
            document.getElementById("contactoFormulario").reset(); // Limpiar el formulario después de enviarlo
            document.getElementById("nombre").style.borderColor = "#ccc";
            document.getElementById("correo").style.borderColor = "#ccc";
            document.getElementById("mensaje").style.borderColor = "#ccc";
    
            setTimeout(function() {
                document.getElementById("mensajeExito").style.display = "none";
            }, 3000); // 3000 milisegundos = 3 segundos
         }
    
         })
   

// Función para validar el correo electrónico
function esValidoCorreo(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
