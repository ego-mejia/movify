import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";

navbar();
footer();

const main = document.querySelector("main");
const segundo = main.children[1]; // índice 1 → segundo elemento
console.log(segundo);
