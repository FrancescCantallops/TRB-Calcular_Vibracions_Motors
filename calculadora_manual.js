import { posicio_cigonyal_y } from "./trigonometria_dinamica.js";
import { posicio_cigonyal_x } from "./trigonometria_dinamica.js";
import { posicio_pisto_y } from "./trigonometria_dinamica.js";

let angle = 0;
let radi = 1;
let ratio = 1.2
let displacement = radi * 2;
let longitut = ratio * displacement;

console.log("Altura cigonal: " + posicio_cigonyal_y(angle, radi));
console.log("Amplada cigonal: " + posicio_cigonyal_x(angle, radi));
console.log("Altura pisto: " + posicio_pisto_y(angle, longitut, radi));