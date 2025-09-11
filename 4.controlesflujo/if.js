//estrutura de una condicion.
//1. palabra reservada.
//2. la condicion o exprecion a evaluar (que deberia sert siempre un tipo de boleano)
// , la exprecion o condicion debera estar ().
//3. el cuerpo contendra el codigo a ejecutar en caso la condicion  sea verdadera.
//4. palabra reservada else
//5. cuerpo que contendra el codigo a ejecutara n caso la condicion sea falso
if (true) {
  let suma = 24 + 45;
  let divi = 45 / 3;
  console.log(suma, divi);
} else {
  console.log("me ejecuto");
}
//crear un programa que evalue si un numero es mayor al otro y si este numero es a la vez un par
let firtsNumber = 25;
let secondNumber = 30;
if (firtsNumber > secondNumber) {
  if (firtsNumber % 2 == 0) {
    console.log("el numero es mayor y par ");
  } else {
    console.log("el numero s mayor pero es impar");
  }
} else {
  console.log("el numero es menor");
}
//craer un programa que me muestre el numero en texto
function numeroATexto(n) {
  const unidades = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  if (n < 0 || n > 99 || isNaN(n)) {
    return "Número fuera de rango (0-99)";
  } else if (n < 10) {
    return unidades[n];
  } else if (n < 20) {
    return especiales[n - 10];
  } else {
    let d = Math.floor(n / 10);
    let u = n % 10;
    return decenas[d] + (u ? " y " + unidades[u] : "");
  }
}

// Ejemplo de uso:
let numero = 42;
console.log(numero + " en texto es: " + numeroATexto(numero));

let numero1 = 1;
if (numero1 == "1") console.log("uno");
else if (numero1 == "2") console.log("dos");
else if (numero1 == "3") console.log("tres");
else if (numero1 == "4") console.log("cuatro");
else if (numero1 == "5") console.log("sinco");
else if (numero1 == "6") console.log("seis");
switch (numero1) {
  case 1:
    console.log("uno");
    break;
  case 2:
    console.log("dos");
    break;
  case 3:
    console.log("tres");
    break;
}
