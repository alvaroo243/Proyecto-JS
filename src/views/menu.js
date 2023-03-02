export {generateMenu};

import { isLogged, logout } from "../services/GestionDeUsuarios";

    
function generateMenu() {
    let menuTemplate = document.createElement('div');
    menuTemplate.id = 'menu';
    let opcion = ``;
    let logoutIs = false;
    if (!isLogged()) { // Si no esta loggeado apareceran los botones de login y registro
        opcion += `
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/login">Login</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#/registro">Registro</a>
        </li>
        `;
    } else { // Si esta logeado aparecera el boton de logOut y de Perfil
        logoutIs = true;
        opcion += `
        <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#/perfil" >Perfil</a>
        </li>
        <li class="nav-item">
        <button class="nav-link" type="button" id="botonLogOut" >LogOut</button>
        </li>
        `;
    }
    menuTemplate.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/buscar">Buscar</a>
        </li>
        ${opcion}
        </ul>
    </div>
    </div>
    </nav>
    `;
    if (logoutIs) {
        menuTemplate.querySelector("#botonLogOut").addEventListener("click", () => {
            logout();
            window.location.reload(); // Actualizo pagina
        });
    }
    return menuTemplate;    
}
