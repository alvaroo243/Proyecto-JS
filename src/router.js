import { buscar } from "./pages/buscar.js";
import {home} from "./pages/home.js";
import {login} from "./pages/login.js";
import { perfil } from "./pages/perfil.js";
import { registro } from "./pages/registro.js";
import { isLogged } from "./services/GestionDeUsuarios.js";
import { olvidoPass } from "./views/olvidoPass.js";

export {router};

function router(ruta) {
    let main = document.querySelector('#main');
    switch (ruta) {
        case '#/':
            main.innerHTML = "";
            home();
            break;
        case '#/buscar':
            main.innerHTML = "";
            buscar();
            break;
        case '#/login':
            if (!isLogged()) { // Si esta loggeado no se podra acceder a el login
                main.innerHTML = "";
                login();
            } else {
                window.location.hash = "#/";
            }
            
            break;
        case '#/registro':
            if (!isLogged()) { // Si esta loggeado no se podra acceder al registro
                main.innerHTML = "";
                registro();
            } else {
                window.location.hash = "#/";
            }
            break;
        case '#/perfil':
            if (isLogged()) { // Si no esta loggeado no se podra acceder a perfil
                main.innerHTML = "";
                perfil();
            } else {
                window.location.hash = "#/";
            }
            break;
        case '#/olvidoPass':
            main.innerHTML= "";
            olvidoPass();
            break;
        case '':
            main.innerHTML = "";
            window.location.hash = "#/";
            break;
        case '/':
            main.innerHTML = "";
            window.location.hash = "#/";
            break;
    }
}