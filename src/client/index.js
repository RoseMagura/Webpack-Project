//import two JS files in js directory (after exporting)
import {formSubmit} from './js/formHandler.js';
// import {isURL} from './js/checkURL.js';
import "./styles/main.scss";
require("regenerator-runtime/runtime");
const button = document.getElementById("submit");
button.addEventListener("click", formSubmit);
