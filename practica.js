let frutas = ["apple", "piña", "zandia", "banana", "ceresa"];
if (frutas.length <= 0) {
  console.log("al menos debes tener dos frutas en tu lista");
} else {
  let contador = 0;
  while (true) {
    if ("zandia" == frutas[contador]) {
      console.log(`la zandia se encontro en la pocision${contador}`);
      break;
    }
  }
}
