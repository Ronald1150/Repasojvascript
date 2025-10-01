//crear una lista de objetos de 5vehiculos que tenga informacion como marca ,modelo ,año de fabracsion precio,numero de placa
// crea funciones para cada uno de estas acciones
//actualizar el valor de una de sus caracteristicas
//agregar un nuevo vehiculo
//eliminar un vehiculo
//poder filtrar los vehiculos por su año de fabricasion
//poder filtrar un solo vehiculo por su numero de placa
let vehiculos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2018,
    precio: 15000,
    placa: "ABC-123",
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2020,
    precio: 18000,
    placa: "XYZ-456",
  },
  {
    marca: "Ford",
    modelo: "Focus",
    año: 2017,
    precio: 12000,
    placa: "JKL-789",
  },
  {
    marca: "Chevrolet",
    modelo: "Spark",
    año: 2019,
    precio: 10000,
    placa: "MNO-321",
  },
  {
    marca: "Nissan",
    modelo: "Sentra",
    año: 2021,
    precio: 20000,
    placa: "QRS-654",
  },
];
function actualizarVehiculo(placa, propiedad, nuevoValor) {
  let vehiculo = vehiculos.find((v) => v.placa === placa);
  if (vehiculo) {
    vehiculo[propiedad] = nuevoValor;
    console.log(`Vehículo con placa ${placa} actualizado correctamente.`);
  } else {
    console.log(`No se encontró vehículo con placa ${placa}.`);
  }
}
function agregarVehiculo(nuevoVehiculo) {
  vehiculos.push(nuevoVehiculo);
  console.log("Vehículo agregado correctamente.");
}
function eliminarVehiculo(placa) {
  vehiculos = vehiculos.filter((v) => v.placa !== placa);
  console.log(`Vehículo con placa ${placa} eliminado correctamente.`);
}
function filtrarPorAño(año) {
  return vehiculos.filter((v) => v.año === año);
}
function buscarPorPlaca(placa) {
  return vehiculos.find((v) => v.placa === placa);
}
console.log("Lista inicial:", vehiculos);
actualizarVehiculo("XYZ-456", "precio", 17500);
agregarVehiculo({
  marca: "Mazda",
  modelo: "3",
  año: 2022,
  precio: 22000,
  placa: "TUV-987",
});
eliminarVehiculo("JKL-789");
console.log("Vehículos fabricados en 2020:", filtrarPorAño(2020));
console.log("Vehículo con placa QRS-654:", buscarPorPlaca("QRS-654"));
console.log("Lista final:", vehiculos);
