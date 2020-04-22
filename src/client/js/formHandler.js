//Setting up event listener and response to submit
const button = document.getElementById("submit");
button.addEventListener("click", formSubmit);

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


  export{formSubmit};
