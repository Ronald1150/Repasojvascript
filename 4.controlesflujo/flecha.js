// es la nueva vesion de ecma script 6 para la nueva
//  creacion de funciones , el objetivo de una funcion
//  es facilitar la creacion de funcion y que el codigo sea legible
const suma = (a, b) => {
  return a + b;
};
console.log(suma(23, 45));

const SaludoNombre = (nombre) => {
  let mensaje = `hola,${nombre}`;
  return mensaje;
};

console.log(SaludoNombre("josema"));
const saludo = () => {
  return "hola";
};
console.log(saludo());
