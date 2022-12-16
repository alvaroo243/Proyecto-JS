export {generateLogin};

import { generateBotonPredefinidos } from "../utils/addUsersPredefinidos";
import { addPredefinidos } from "../utils/addUsersPredefinidos";
import { validarForm } from "../utils/validarLogin";

function generateLogin() {
    let login = document.createElement("div");
    login.id = "login";
    login.innerHTML =generateBotonPredefinidos()+`
            <h1 id="tituloLogin" >Login:</h1>
            <div id="erroresLogin"></div><br>
            <div>
                <form action="" method="post" >
                    <label>Nickname o email:</label>
                    <input type="text" id="inputLogin" required /><br><br>
                    <label>Contraseña:</label>
                    <input type="password" id="inputCont" required /><br><br>
                    <button type="button" id="botonLogin">Login</button>
                </form>
            </div>
    `;
    login.querySelector("#botonLogin").addEventListener("click", async ()=> {
        let inpt = login.querySelector("#inputLogin").value;
        let passw = login.querySelector("#inputCont").value;
        if (validarForm(inpt, passw)) {
            if (inpt.includes("@")) {
            
            } else {
                console.log("NOOOOOOOOOOO");
            }
        } else {
            login.querySelector("#erroresLogin").innerHTML = "Nickname o email y contraseña deben de estar introducidos";
        }
    });
    login.querySelector("#botonPredef").addEventListener("click", addPredefinidos);

    return login;
}

