import { buscar } from "./pages/buscar.js";
import {home} from "./pages/home.js";
import {login} from "./pages/login.js";

export {router};

function router(ruta) {
    let main = document.querySelector('#main');
    switch (ruta) {
        case '#/':
            main.innerHTML = "";
            home();
            break;
    
        case '#/login':
            main.innerHTML = "";
            login();
            break;
        case '#/buscar':
            main.innerHTML = "";
            buscar();
            break;
        case '':
            main.innerHTML = "";
            window.location.hash = "#/";
            break;
    }
}