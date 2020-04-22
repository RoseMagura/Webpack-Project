const button = document.getElementById("submit");
button.addEventListener("click", isURL);
const errorField = document.getElementById("error");

function isURL() {
  const url = document.getElementById("input").value;
  var x = url.includes("http://") || url.includes("https://");
  if (x === false) {

    errorField.innerHTML = "Error! Not a valid URL. Please try again.";
  } else{errorField.innerHTML = "";}
}
