export {generateLogin, generateRegister};

import { validarForm } from "../utils/validarLogin";
import { loginUser, registerUser } from "../services/GestionDeUsuarios";
import { createCuenta } from "../services/GestionDeCuentas";
import { comprobarCuentaYSiNoHayCrear } from "../utils/cuentas";

function generateLogin() {
    let login = document.createElement("div");
    login.id = "login";
    login.innerHTML = `
            <h1 id="tituloLogin" >Login:</h1>
            <div id="erroresLogin"></div><br>
            <div class="form">
                <form action="" method="post" >
                    <label>Email:</label>
                    <input type="text" id="inputLogin" required /><br><br>
                    <label>Contraseña:</label>
                    <input type="password" id="inputCont" required /><br><br>
                    <button type="button" id="botonLogin">Login</button>
                </form>
            </div><br>
            <div id="olvido"></div>
    `;
    login.querySelector("#botonLogin").addEventListener("click", async ()=> {
        let email = login.querySelector("#inputLogin").value;
        let passw = login.querySelector("#inputCont").value;
        if (validarForm(email, passw)) {
            await loginUser(email, passw).then((res) => {
                if (res.success === true) {
                    comprobarCuentaYSiNoHayCrear(email);
                    alert("Sesion Iniciada!");
                    window.location.reload();
                } else {
                    alert("Usuario o contraseña incorrectos!");
                    let olvidoPass = document.createElement("a");
                    olvidoPass.innerHTML = "¿Has olvidado tu contraseña?";
                    olvidoPass.href = "#/olvidoPass";
                    login.append(olvidoPass);
                }
            });
        } else {
            login.querySelector("#erroresLogin").innerHTML = "Nickname o email y contraseña deben de estar introducidos";
        }
    });
    return login;
}

function generateRegister() {
    let registro = document.createElement("div");
    registro.id = "registro";
    registro.innerHTML = `
            <h1 id="tituloRegistro" >Registro:</h1>
            <div id="erroresRegistro"></div><br>
            <div class="form">
                <form action="" method="post" >
                    <label>Email:</label>
                    <input type="text" id="inputRegistro" required /><br><br>
                    <label>Contraseña:</label>
                    <input type="password" id="inputCont" required /><br><br>
                    <button type="button" id="botonRegistro">Registro</button>
                </form>
            </div>
    `;
    registro.querySelector("#botonRegistro").addEventListener("click", async ()=> {
        let email = registro.querySelector("#inputRegistro").value;
        let passw = registro.querySelector("#inputCont").value;
        if (validarForm(email, passw)) {
            await registerUser(email, passw).then((res) => {
                console.log(res);
                if (res.success === true) {
                    alert("Usuario creado! Revisa tu correo para verificar el usuario!");
                    window.location.reload();
                } else {
                    alert("Usuario o contraseña incorrectos!");
                }
            });
            
        } else {
            registro.querySelector("#erroresRegistro").innerHTML = "Nickname o email y contraseña deben de estar introducidos";
        }
    });
    return registro;
}

/*
FORMDATA

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };
*/