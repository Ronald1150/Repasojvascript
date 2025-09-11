// funciones para el manejo de operadores aritmetricos
let numeroUno = 34;
let numeroDos = 67;
function SumaDeDosNumeros(a, b) {
  let suma = a + b;
  return suma;
}
console.log(SumaDeDosNumeros(34, 67));
// llamada de funcion con argumentos posiscionales
console.log(SumaDeDosNumeros(34, 67));
console.log(SumaDeDosNumeros(34, 67));
//llamada con funcion de argumentos nominales
console.log(SumaDeDosNumeros((a = 34), (b = 67)));
