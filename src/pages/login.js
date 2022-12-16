import { generateLogin} from "../views/formLogin.js";

export {login};

function login() {
  let main = document.querySelector("#main");
  main.append(generateLogin());
}