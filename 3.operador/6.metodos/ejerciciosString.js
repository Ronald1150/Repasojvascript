/*
1. crear un programa , haciendo uso de una funcion un contador de vocales ,la funcion debera reibir
 un texto y la vocal a buscar y retorna la cantidad de veces que se encuentra dicha vocal.
hacer uso de los metodos para string
*/
function contadorVocales(texto, vocal) {
  if (!"aeiou".includes(vocal)) {
    return "no hay vocal";
  }
  let partes = texto.split(vocal);
  return partes.length - 1;
}
let frase = "hola Ronald";
console.log("La vocal 'o' aparece:", frase.contadorVocales);
/**
 * 2. crear un programa que haciendo uso de una funcion puedad recibir un alista de amigos y
 * que retorne otra lista pero con los nombres en un alista de amigos y que retorne otra
 * lista pero con los no,bres en mayusculas
 **/
