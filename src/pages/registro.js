import { generateRegister} from "../views/formLogin.js";

export {registro};

function registro() {
  let main = document.querySelector("#main");
  main.append(generateRegister());
}