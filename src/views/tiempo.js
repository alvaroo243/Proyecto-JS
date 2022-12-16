export {generateDatosTiempo}

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
    //Es por eso que guardo la informacion en el localStorage por si acaso falla, que coja la informacion ya cogida anteriormente

    promesa.then((response) => {
        response.json().then((datos)=> {
            vistaTiempo.innerHTML = `<div id="tiempo">
                <h3>Tiempo actual en: `+datos.location.name+`</h3>
                <img src="`+datos.current.condition.icon+`" />
                <p>Ultima actualizacion: `+datos.current.last_updated+`</p>
                </div>`;
                localStorage.setItem("datosTiempo", JSON.stringify(datos));
        });
    }).catch((error) => {
        let datosAlmacenados = JSON.parse(localStorage.getItem("datosTiempo"));
        vistaTiempo.innerHTML = `<div id="tiempo">
                <h3>Tiempo actual en: `+datosAlmacenados.location.name+`</h3>
                <img src="`+datosAlmacenados.current.condition.icon+`" />
                <p>Ultima actualizacion: `+datosAlmacenados.current.last_updated+`</p>
                </div>`;
    });

    return vistaTiempo;
}