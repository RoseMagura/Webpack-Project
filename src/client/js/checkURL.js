function isURL() {
  const errorField = document.getElementById("error");
  const inputField = document.getElementById("input");
  const url = inputField.value;
  console.log('input: ' + inputField.value);
  var x = url.includes("http://") || url.includes("https://");
    if (x === false) {
      errorField.innerHTML = "Error! Not a valid URL. Please try again.";}
      else{errorField.innerHTML = " ";}
    };

export{isURL}
