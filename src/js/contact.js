/* document.getElementById("enviar").addEventListener("click", function () {
    // Obtén los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar los campos
    if (nombre && correo && mensaje) {
        // Validar que el correo sea correcto
        if (!esValidoCorreo(correo)) {
  */          /* alert("Por favor, introduce una dirección de correo electrónico válida.");*/
   /*         document.getElementById("correo").style.borderColor = "red";
            return;
        }

        // Simulando que el correo fue enviado y mostrando el mensaje de éxito
        document.getElementById("mensajeExito").style.display = "block"; // Mostrar mensaje de éxito
        document.getElementById("contactoFormulario").reset(); // Limpiar el formulario después de enviarlo

    } else {
        // Si los campos no están completos, mostrar un error en los campos vacíos
        if (!nombre) document.getElementById("nombre").style.borderColor = "red";
        if (!correo) document.getElementById("correo").style.borderColor = "red";
        if (!mensaje) document.getElementById("mensaje").style.borderColor = "red";
    }
});

// Función para validar el correo electrónico
function esValidoCorreo(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
*/

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("contactoFormulario");
    const botonEnviar = document.getElementById("enviar");

    // Validar correo electrónico
    function esValidoCorreo(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        /* 
            ^[^\s@]+: Verifica que la parte inicial no contenga espacios en blanco ni el símbolo @.
            @[^\s@]+: Requiere que haya un @ seguido de texto.
            \.[^\s@]+$: Verifica que haya un punto (.) seguido de texto (el dominio, como .com o .es).

        */
    }

    // Mostrar errores en los campos
    function mostrarError(campo, mensajeError) {
        campo.classList.add("error-border");
        /*  escribir el mensaje en el campo*/
    }

    // Quitar errores en los campos
    function limpiarErrores() {
        const campos = formulario.querySelectorAll(".error-border");
        campos.forEach(campo => campo.classList.remove("error-border"));
    }

    botonEnviar.addEventListener("click", () => {
        limpiarErrores();

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const mensaje = document.getElementById("mensaje");

        let formularioValido = true;

        if (!nombre.value.trim()) {
            mostrarError(nombre, mensajeError);
            formularioValido = false;
        }

        if (!correo.value.trim() || !esValidoCorreo(correo.value)) {
            mostrarError(correo);
            formularioValido = false;
        }

        if (!mensaje.value.trim()) {
            mostrarError(mensaje);
            formularioValido = false;
        }

        if (formularioValido) {
            const asunto = `Formulario de Contacto de ${nombre.value}`;
            const cuerpo = `De: ${nombre.value} (${correo.value})\n\nMensaje:\n${mensaje.value}`;
            const mailtoLink = `mailto:falofr@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
               
        document.getElementById("mensajeExito").style.display = "block"; // Mostrar mensaje de éxito
        document.getElementById("contactoFormulario").reset(); // Limpiar el formulario después de enviarlo
        setTimeout(function() {
            document.getElementById("mensajeExito").style.display = "none";
        }, 3000); // 3000 milisegundos    

        }
    });
});

