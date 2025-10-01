let lista = [];
lista[0] = "";
lista[1] = "pera";
console.log(lista.length);
console.log(lista);
//1. crear una lista vacia y agreagar de manera automatica los numeros pares que existen entre 0y 20
let pares = [];
for (let i = 1; i <= 10; i++) {
  pares[i] = i * 2;
}
console.log(pares);

let amigos = ["e", "i", "o"];
amigos.unshift("a");
amigos.push("u");
console.log(amigos);
let frutas = ["manzana", "pera", "platano", "zandia"];
let cerecita = frutas.pop();
cerecita;
frutas;
let texto = ["hola", "como", "", "estas"];
delete texto[2];
texto;
let vocals = ["a", "e", "e", "i", "o", "u"];
vocals.splice(2, 1);
vocals;
let friends = [];
let amigosPriamria = ["alfredo", "luis", "edgar"];
let amigossecundaria = ["edison", "remmy", "miguel"];
let amigossuperior = ["josue", "marlon", "handy"];
friends = amigosPriamria.concat(amigossecundaria, amigossuperior);
let numeros = [1, 2, 3, 4, 5];
numeros.forEach((n) => {
  console.log(n);
});
