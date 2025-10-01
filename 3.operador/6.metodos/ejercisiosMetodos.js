let datosAlumno = {
  nombre: "antonio",
  apellido: "pampañaupa",
};
datosAlumno.edad = "20";
datosAlumno.sexo = "masculino";
datosAlumno["apellido"] = "12345";
delete datosAlumno.sexo;
// agregar edad y sexo
//actualizar el apellido
//eliminar sexo
let alumnos = [
  { nombre: "ruth", edad: 20, CUI: 12345678 },
  { nombre: "ana", edad: 22, CUI: 123231223 },
  { nombre: "ronald", edad: 19, CUI: 21345678 },
];

//deseo mostrar una lista solo de los numeros al 19
let listaMenores = alumnos.filter((al) => al.edad < 19);
console.log(listamenores);
//actualizar la lsita de objetos y agregarle el genero femenino a todos
let listaActualizada = alumnos.map((el) => {
  el.genero = "femenino";
  return el;
});
console.log(listaActualizada);
//de mi lista deseo mostrar a la persona que tenga como CUI
let BuscaCUI = alumnos.find((el) => el.CUI == 21345678);
console.log(buscaCUI);
