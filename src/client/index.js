//import two JS files in js directory (after exporting)
// import {formSubmit} from './js/formHandler.js';
import { updateDisplay } from "./js/dynamicDisplay.js";
// import {isURL} from './js/dynamicDisplay.js';
import "./styles/main.scss";
require("regenerator-runtime/runtime");

const button = document.getElementById("submit");
button.addEventListener("click", formSubmit);
button.addEventListener("click", isURL);

function formSubmit() {
  // event.preventDefault();
  const url = document.getElementById("input").value;
  console.log(url + " submitted");
  fetch("http://localhost:3001/postURL", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: {
        url: `${url}`
      }
    })
  })
    .then(res => res.json())
    .then(function(res) {
      document.getElementById(
        "response"
      ).innerHTML = `Polarity: ${res.polarity}
                    Polarity Confidence: ${res.polarity_confidence}`;
    });
}

function isURL() {
  const url = document.getElementById("input").value;
  var x = url.includes("http://") || url.includes('https://');
  if(x === false){
    const errorField = document.getElementById("error");
    errorField.innerHTML = "Error! Not a valid URL. Please try again.";
  }
}
