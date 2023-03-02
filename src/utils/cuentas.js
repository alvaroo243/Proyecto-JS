import { createCuenta, getCuentaByUid } from "../services/GestionDeCuentas";

export{generarCuenta, comprobarCuentaYSiNoHayCrear};

async function generarCuenta(email) {
    await createCuenta(email).then((response) => {
        console.log("Hola"+response);
        if (response == true) {
            alert("Usuario y cuenta creados!");
        } else {
            alert("No se ha podido crear la cuenta!")
        }
    });
}

function comprobarCuentaYSiNoHayCrear(email) {
    getCuentaByUid().then((cuenta) => {
        console.log("Ey");
        console.log(cuenta);
        if (cuenta == null) {
            generarCuenta(email); 
            // Generar cuenta si que funciona pero al no funcionar el getCuenta al volver a iniciar sesion se solapan porque ya esta creada la cuenta
        }
    });
}