const formulario = document.getElementById("formulario");
const campos = formulario.querySelectorAll("input, select");

function actualizarEstadoVisual(campo) {
    if (campo.checkValidity()) {
        campo.classList.remove("input-error");
        campo.classList.add("input-success");
    } else {
        campo.classList.remove("input-success");
        campo.classList.add("input-error");
    }
}

campos.forEach(campo => {
    campo.addEventListener("input", () => {
        actualizarEstadoVisual(campo);
    });

    campo.addEventListener("focusout", () => {
        if (!campo.checkValidity()) {
            campo.reportValidity();
        }
    });
});