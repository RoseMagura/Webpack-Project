function isURL(input) {
  const errorField = document.getElementById("error");
  var x = input.includes("http://") || input.includes("https://");
    if (x === false) {
      errorField.innerHTML = "Error! Not a valid URL. Please try again.";
      return false;}
      else{
        errorField.innerHTML = " ";
        return true;}
    };

export{isURL}
