export{olvidoPass};

import { forgotPassword } from "../services/GestionDeUsuarios";

function olvidoPass() {
    let contenido = document.createElement("div");
    contenido.classList.add("formOlvidoPass");
    contenido.append(form());
    let container = document.querySelector('#main');
    container.append(contenido);
}

function form() {
    let formOlvidoPass = document.createElement("form");

    let submit = document.createElement("input");
    submit.value = "Recuperar contraseña";
    submit.type = "submit";

    let formOlvidoPassHtml = `
        <label for="user-olvidoPass">Email:</label>
        <input type="text" name="user" id="user-olvidoPass">
    `;

    formOlvidoPass.innerHTML = formOlvidoPassHtml;
    formOlvidoPass.append(submit);

    submit.addEventListener("click", async (e) => {
        e.preventDefault();

        let formData = new FormData(formOlvidoPass); //Form Data

        let email = document.getElementById("user-olvidoPass").value;

        if (email == "") {
            alert("Rellena todos los campos!");
            return;
        }

        await forgotPassword(email);
    });

    return formOlvidoPass;
}