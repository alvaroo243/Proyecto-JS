import { generateCard } from "../views/cards.js";
import { generateGrahp } from "../utils/graph.js";
import {generateDatosTiempo} from "../views/tiempo.js";

export {home};

function home() {
  let container = document.querySelector('#main');
  container.append(generateDatosTiempo());
  container.append(generateGrahp());
  container.append(generateCard("Cabecera", "Titulo", "Texto", "Pie"));
}