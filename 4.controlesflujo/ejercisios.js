// crear uann funcion que reciva por parametro una lista y un elemto a encontrar retornar si el elemnto fue encontrado o no
function buscarElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) if (lista[i] === elemento) return true;
  return false;
}
console.log(buscarElemento(["manzana", "pera", "uva"], "pera")); // true
console.log(buscarElemento(["manzana", "pera", "uva"], "sandía")); // false
