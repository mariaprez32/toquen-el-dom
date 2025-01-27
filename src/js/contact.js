document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("contactoFormulario");
    const botonEnviar = document.getElementById("enviar");

    // Validar correo electrónico
    function esValidoCorreo(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Mostrar errores en los campos
    function mostrarError(campo) {
        campo.classList.add("error-border");
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
            mostrarError(nombre);
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
            
            window.location.href = mailtoLink; // Abre el cliente de correo
        }
    });
});
