import{isURL} from './checkURL.js';
const button = document.getElementById("submit");

function formSubmit() {
  const url = document.getElementById("input").value;
  console.log(url + " submitted");

  isURL();

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
      let text1 = 'Polarity: ';
      let text2 = 'Polarity Confidence: ';
      document.getElementById(
        "response"
      ).innerHTML = `${text1.bold()} ${res.polarity}\xa0\xa0\xa0${text2.bold()}`
                    + `${res.polarity_confidence.toFixed(2)}`;
    });
}

export{formSubmit};
