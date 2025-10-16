let titulo = document.querySelector("h1");
let primerTitulo = titulo.textContent;
textContent;
titulo.textContent = "Otro titulo";
let contenido = document.querySelector("#contenido");
contenido.innerHtml = `<p>${primerTitulo}</p>`;
let amigos = ["miguel", "ruth", "jose"];
contenido.innerHTML = amigos.map((el) => {
  return `<p></p>`;
});
