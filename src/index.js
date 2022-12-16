import './scss/style.css';
import './scss/styles.scss';

import {generateMenu} from "./views/menu.js";
import { generateFooter } from "./views/footer.js";
import { router } from "./router.js";
import * as bootstrap from 'bootstrap';



(() => {
        document.addEventListener("DOMContentLoaded", () => {
                let body = document.body;
                body.append(generateMenu());
                let main = document.createElement("div");
                main.id = "main";
                body.append(main);
                router(window.location.hash);
                body.append(generateFooter());
                window.addEventListener('hashchange',function hasChanged(){
                        router(window.location.hash);
                });
        });
})();