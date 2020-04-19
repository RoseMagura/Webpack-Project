//Setting up event listener and response to submit
const button = document.getElementById("submit");
button.addEventListener("click", formSubmit, false);

function formSubmit() {
  const url = document.getElementById("input").value;
  console.log(url + " submitted");
}
export { formSubmit };
