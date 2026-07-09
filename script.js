const formulario = document.getElementById("formulario");
const campos = formulario.querySelectorAll("input, select");

const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");

function actualizarEstadoVisual(campo) {
    if (campo.checkValidity()) {
        campo.classList.remove("input-error");
        campo.classList.add("input-success");
    } else {
        campo.classList.remove("input-success");
        campo.classList.add("input-error");
    }
}

function validarPassword() {
    if (password.value !== confirmar.value) {
        confirmar.setCustomValidity("Las contraseñas no coinciden");
    } else {
        confirmar.setCustomValidity("");
    }

    actualizarEstadoVisual(confirmar);
}

campos.forEach(campo => {
    campo.addEventListener("input", () => {
        if (campo === password || campo === confirmar) {
            validarPassword();
        }

        actualizarEstadoVisual(campo);
    });

    campo.addEventListener("focusout", () => {
        if (!campo.checkValidity()) {
            campo.reportValidity();
        }
    });
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    validarPassword();

    if (formulario.checkValidity()) {
        const formData = {};

        campos.forEach(campo => {
            if (campo.type === "checkbox") {
                formData[campo.id] = campo.checked;
            } else {
                formData[campo.id] = campo.value;
            }
        });

        console.table(formData);
        alert("Formulario enviado correctamente. Revisa la consola con F12.");
        formulario.reset();

        campos.forEach(campo => {
            campo.classList.remove("input-error");
            campo.classList.remove("input-success");
        });

    } else {
        formulario.reportValidity();
    }
});