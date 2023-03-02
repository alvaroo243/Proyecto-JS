import { getCookie, setCookie } from "../utils/cookies";

export {generateDatosTiempo}

/*
function generateDatosTiempo() {
    let API_URL = "http://api.weatherapi.com/v1/current.json?key=f9b6401bd564451897d74757221412&q=Jativa, Valencia, Spain&aqi=no";
    let vistaTiempo = document.createElement("div");
    let promesa = new Promise((resolve, reject) => {
        fetch(API_URL)
            .then((response) => {
                if (response.status !== 200) {
                    reject(response);
                }
                resolve(response);
            })
            .catch(reject);
    });

    //A veces el servidor web donde recojo la informacion tarda en cargar durante unos minutos (mientras se actualiza)
    //Es por eso que guardo la informacion en Cookies por si acaso falla, que coja la informacion ya cogida anteriormente
    //Aproximadamente cada 15 minutos se actualiza

    promesa.then((response) => {
        response.json().then((datos)=> {
            vistaTiempo.innerHTML = `<div id="tiempo">
                <h3>Tiempo actual en: `+datos.location.name+`</h3>
                <img src="`+datos.current.condition.icon+`" />
                <p>Ultima actualizacion: `+datos.current.last_updated+`</p>
                </div>`;
                setCookie("datosTiempo", JSON.stringify(datos));
        });
    }).catch(() => {
        let datosAlmacenados = JSON.parse(getCookie("datosTiempo"));
        vistaTiempo.innerHTML = `<div id="tiempo">
                <h3>Tiempo actual en: `+datosAlmacenados.location.name+`</h3>
                <img src="`+datosAlmacenados.current.condition.icon+`" />
                <p>Ultima actualizacion: `+datosAlmacenados.current.last_updated+`</p>
                </div>`;
    });

    return vistaTiempo;
}
*/


//PROGRAMACION FUNCIONAL
// Me falta algo para que funcione  
// Yo queria hacer un compose con las dos funciones pero en hacerVista no me coge los datos y me los da como undefined

const compose =
        (...funciones) =>
        (valor) =>
            funciones.reduceRight((resultado, funcion) => funcion(resultado), valor);

const vistaTiempo = document.createElement("div");


function generateDatosTiempo() {
    let API_URL = "http://api.weatherapi.com/v1/current.json?key=f9b6401bd564451897d74757221412&q=Jativa, Valencia, Spain&aqi=no";
    const composicionDatos = compose(
        hacerPromesa
    );    
    composicionDatos(API_URL);
    return vistaTiempo;
}

async function hacerPromesa(URL) {
    try {
        const response = await fetch(URL);
        if (response.status !== 200) {
            throw new Error("Error en la petición");
        }
        const datos = await response.json();
        setCookie("datosTiempo", JSON.stringify(datos));
        hacerVista(datos);
    } catch (error) {
        console.error(error);
        let datosAlmacenados = JSON.parse(getCookie("datosTiempo"));
        hacerVista(datosAlmacenados);
    }
    
}

function hacerVista(datos) {
    //A veces el servidor web donde recojo la informacion tarda en cargar durante unos minutos (mientras se actualiza)
    //Es por eso que guardo la informacion en Cookies por si acaso falla, que coja la informacion ya cogida anteriormente
    //Aproximadamente cada 15 minutos se actualiza
    vistaTiempo.innerHTML = `<div id="tiempo">
        <h3>Tiempo actual en: `+datos.location.name+`</h3>
        <img src="`+datos.current.condition.icon+`" />
        <p>Ultima actualizacion: `+datos.current.last_updated+`</p>
    </div>`;

    return vistaTiempo;
}
