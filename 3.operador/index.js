//operdor unario
//operador de negacion
//operdor esta a la izquierda del valor y como resultadoobtenemos otro valor
let negacion = !false;
// exprecio es un valor complejo que sera solucionado y nos producira o retorna un nuevo valor
console.log(negacion);
//operadores binarios
//son los evaluan dos valores y nos dan como resultado un nuevo valor
let suma = 34 + 52;
let resta = 4 - 2;
let producto = 4 * 5;
let divicion = 3 / 3;
let potencia = 3 ** 2;
let residuo = 10 % 3;
//tarea operadores de comparacion
let a = 10;
let b = "10";

console.log(a == b); // true (compara solo valor)
console.log(a === b); // false (compara valor y tipo)
console.log(a > 5); // true
console.log(a <= 10); // true

//operadores logicos
true && false; // false
5 > 3 && 10 > 5; // true
"Hola" && 0; // 0

//operadores ternario
//1. el primer valor debe ser un valor boleano
//2. el segundo valor se mostrara si el primer valor es verdadero
//2. El tercer valor se mostrar si el primer valor es falso
let ternario = true ? "verdadero" : "falso";
console.log(ternario);
