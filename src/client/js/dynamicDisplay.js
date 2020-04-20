document.body.addEventListener("click", updateDisplay);

function updateDisplay(){
//set innerHTML to display information from API dynamically
document.getElementById("response").innerHTML = "API Data (edit)";
}

export {updateDisplay};
