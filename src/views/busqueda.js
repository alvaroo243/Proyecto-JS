import { getAllCuentas } from "../services/GestionDeCuentas";
import { isLogged } from "../services/GestionDeUsuarios";

export{busqueda};

function busqueda() {
    let input = document.createElement('div');
    input.innerHTML = `
    <input type="text" />
    Busqueda de cuentas 
    `;
    if (isLogged()) {
        let cuentas = getAllCuentas();
        cuentas.then((datos)=>{ // Por culpa del get no funciona mostraria todas las cuentas que existen
            for (const cuenta of datos) {
                input.innerHTML += `
                ${cuenta}
                `;
            }
        });
    }
    
    return input;
}