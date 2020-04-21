//import two JS files in js directory (after exporting)
// import {formSubmit} from './js/formHandler.js';
import {updateDisplay} from './js/dynamicDisplay.js';
import './styles/main.scss'
require("regenerator-runtime/runtime");

const button = document.getElementById("submit");
button.addEventListener("click", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const url = document.getElementById("input").value;
  console.log(url + " submitted");
  fetch('http://localhost:3000/postURL', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: {
        'url': `${url}`
      }
    })
  })
    .then(res => res.json())
    .then(function(res){
       document.getElementById("response").innerHTML = "Polarity: " + res.polarity;
    })
  }

// const getData = async() => {
//   const res = await fetch(`http://localhost:3000/api?input=${url}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   try{
//     const data = await res.json();
//     console.log(data);
//   } catch(error){
//     console.log("error", error);
//   }
  // .then(
  //   updateDisplay()
  // )
  // getData();
// let newsText = "Trump's approval rating is down significantly from 49% in"
// + "March, while his disapproval rating is up 9 points from 45%.";



// const getData = async() => {
//   const res = await fetch("/all");
//     try{
//       const data = await res.json();
//       console.log(data);
//     } catch(error){
//       console.log("error", error);
//     }
// }
