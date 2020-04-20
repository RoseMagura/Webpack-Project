//import two JS files in js directory (after exporting)
// import {formSubmit} from './js/formHandler.js';
import {updateDisplay} from './js/dynamicDisplay.js';
import './styles/main.scss'
require("regenerator-runtime/runtime");

const baseURL = "https://api.aylien.com/api/v1/sentiment";
const button = document.getElementById("submit");
button.addEventListener("click", formSubmit, false);

function formSubmit() {
  const url = document.getElementById("input").value;
  console.log(url + " submitted");
  getData();
}

let newsText = "Trump's approval rating is down significantly from 49% in"
+ "March, while his disapproval rating is up 9 points from 45%.";
const getData = async() => {
  const res = await fetch(`http://localhost:3001/api?input=${newsText}`);
  try{
    const data = await res.json();
    console.log(data);
  } catch(error){
    console.log("error", error);
  }
}

// const getData = async() => {
//   const res = await fetch("/all");
//     try{
//       const data = await res.json();
//       console.log(data);
//     } catch(error){
//       console.log("error", error);
//     }
// }
