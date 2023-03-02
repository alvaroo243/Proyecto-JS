import { getCuentaByUid } from "../services/GestionDeCuentas";

export {generatePerfil};

function generatePerfil() {
    let perfilUsuario = document.createElement('div');
    perfilUsuario.id = 'perfil';
    perfilUsuario.innerHTML = `
    <h1>Email: ${localStorage.getItem("emailUsuario")}</h1> 
    `;
}