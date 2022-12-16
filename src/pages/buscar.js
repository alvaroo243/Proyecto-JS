import {busqueda} from "../views/busqueda.js";

export {buscar};

function buscar() {
  let container = document.querySelector('#main');
  container.append(busqueda());
}