const buttonFuncExterna = document.getElementById("#funcion_externa");
buttonFuncExterna.addEventListener("click", functionExterna());
function functionExterna() {
  alert("Estoy en una función externa");
}
const buttonFunCallback = document.querySelector("#funcion_callback");
buttonFunCallback.addEventListener("click", () => {
  alert("Estoy en una función callback");
});
