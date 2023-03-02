import { generatePerfil} from "../views/perfilUsuario.js";

export {perfil};

function perfil() {
  let main = document.querySelector("#main");
  main.append(generatePerfil());
}