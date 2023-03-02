import Chart from "chart.js/auto";
import { getAllCuentas } from "../services/GestionDeCuentas";

export {generateGrahp};

function generateGrahp() {
    let contador = 0;
    let arrayContador = new Array;
    getAllCuentas().then((datos) => {
      for (const cuenta of datos) { // Guardaria en un array cada numero de usuarios que hay para que en el grafico se vea como sube
        contador++;
        arrayContador.push(contador);
        
      }
    });
    
    let canvas = document.createElement("div");
    canvas.innerHTML = `<canvas id="graficaDias" width="200" height="30"></canvas>`;
    new Chart(canvas.querySelector("#graficaDias"), {
        type: "line",
        data: {
          datasets: [
            {
              label: "Usuarios loggeados",
              data: arrayContador.map((dato) => dato), 
              borderWidth: 1,
            },
          ],
        },
      });
      return canvas;
}