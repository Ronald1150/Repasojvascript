# Taller de Repaso de Jva Script

> [!WARNING] Observacion: Quokka se debe ejecutar en cada archivo.

> [!TIP]
> Quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver la consola en vivo

## 1. Tipos de datos

En javascript se clasifica en dos grandes grupo :

> [!TIP]
> Java Script tiene funciones predeterminadas por ejemplo para mostrarun mensaje por consola `console.log()`, para poder verificar que tipo de datos estamos manejando en JavaScript tambien tenemos una funcion por defecto llamdo `tipeof()`

### Primitivos

Son datos que siempre existiran:

1. Numericos

- Enteros Positivos
- Entero Negativos
- Decimal Positivo
- Decimal Negativo

2. Texto

- Cracteristicas
- Simbolo Especiales
- String

3. Booleanos

- True
- False

### Estructurados

1. Array (Lista)
   - Array de tipo numerico
   - Array de tipo String
   - Array de tipo mixto

- Como esta estructurado

2. Objetos (Diccionario)
   - ![Estructura](assets/excalidraw.png)

- Son similares alas listas con la unica diferencia que en ves de tener valor e indices su elelntos trabajo con clave valor

## 2. Variables (Enlace,banding)

Es la tecnica que se usa para apuntar a una direccion en memoria y al vlor o dato relacionado o que se encuentre almacenado en ese momento.
Tenemos dos pasos para crear una variable:

1. Primero declarar la variable/constamte
2. Segundo inicializar la varible/constante

**Observacion** Para crear una variable primero tenemos que crear el enlaceluego darle el nombre de la variable/constante: para las varibles tenemos la palabra reservada `Keyword` - `let`, `var`. Para las constantes tenemos la palabra reservadad `keyword` - `const`.

**Recomnedaciones**

- `let` usar cunado el valor tendra que variar.
- `const` usar cuando el valor sera mismo siempre
- `var` evitar usar.
- `let`-`var` ambos nos permitecrear varibles su unica diferencia es el alcanse ambito o `scope` (Averiguar)

## 3. Operadores

su clasificasion general se divide en tres:

1. Operdores unarios
   los operadores unarios son aquellos que que estaan ubicados a la isquierda del valor y que retornanun nuevo valor
   - operadores de negacion
2. operadores binarios
   los operadores binarios son aquellos que estan en medio de dos valorees y que retornan un unico valor
   - operadores aritmetricos
   - operadores de comparacion
   - operadores logicos
3. operadores terneario
   los operadorees ternario son aquellos que evaluan tres valores y que retorna un solo valor.
   - operador condicional

## 4. Controles de Flujo

### 1. control de decision (if-else)

nuestro programas el javascript contiene mas de una sentecia y las sentecias son ejecutadas una a una como si fuera una historia , de arriba hacia harriba hacia abajo como un camino recto.
javascript nos permite crear caminos alternativos en nuestro programas dependiendo de una decision a esto se le conose como caminos o ejecusion condicional, que ejecutara una sentecia u otra teneiedo en cuenta la condicion asi podemos crear multiples caminos u opciones en nuestro programas.
Si tenemos una condicion verdaera se ejecutara una sentencia si tenemos una condicion false se ejecutara otra sentencia totalmente distinta.

**Observacion**
la ejecucion condicional rompe el flujo normal de un programa.

### 2. bucles (for) - tarea con sus ejemplos en codigo

####

### 3. bucles (while)

## 4. Funcionales

Las funcijones son bloques de codigo que se ejecutan de manera independiente , podemos decir tambien que son mini programas que toman datos como entrada y retornan otros datos como salida.
Las funciones son fundamentales para el correcto ordenamiento de nuestro codigo ade mas que nos permite deparar de una manera mas ordenada nuestra logica y evitar repetir el codigo muchas veses.
existen tres tipos de funciones:

#### Tipos de funciones

##### 1. Funciones por declaracon

Esta tipo de funcion es la mas conocida y mas usada
su estructura es la siguientes

##### 2. Funciones por exprecion

##### 3. Funciones flecha (arro)

## 5. Metodos de los para trabajar con datos estructurados

los metodos que dan funcionalidades extrtas a los tipos de datos en los cuales se apliaca un metodo es antececido por un daro y un punto
**Ejemplo**
el ejemplo mas claro de un metodo es el `length` - este metodo nos permite o nos retorna la la cantidad de caracteres de un string o la cantidad de elementos de una lista

```js
"hola".length[(2, 5, 4, 6, 7)].length; //4 //5
```

> [!TIP] los argumentos en su mayoria solo se aplica a tipo de datos string , listas y objetos , en su gran parte son aplicados para listas

### 6.1 Metodos para string - cadenas de texto

#### Length

devuelve la longitud de una cadena

```js
let mensaje = "hola como estan";
console.log(mensaje.length);
//retorna -> 15
```

#### Tolowercase

devuelve una cadena en minusculas

```js
let texto = "HOLA";
console.log(texto.tolowercase);
//retorna -> hola
```

#### Touppercase

devuelve una cadena en mayuscula

```js
let texto = "hola";
console.log(texto.touppercase);
//retorna -> HOLA
```

#### Concat

combina el texto de dos o mas cadenas

```js
let nombre = "kcapa";
let saludo = "hola";
//let concatenado=nombre+saludo
console.log(saludo.concat(nombre));
let cad1 = "oh";
let cad2 = "me";
let cad3 = "vengo";
console.log(cad1.concat(cad2, cad3));
```

#### Trim

este metofo elimina los espacios que existen al inicio o al final de una caden de texto.

```js
let texto="hola"
let nuevoTexto=texto.trim() //hola
let otroTexto texto="hola"
let nuevoOtroTexto=otroYexto.trim() //hola
```

#### Slice

este metodo nos permite extraer partes de una ccadena , especificando sus indicices, donde comenzar y hasta donde mostrar

```js
let parrafo = "hola soy Ronald";
// solo quiero que me muestre Ronald
parrafo.slice(9.14);
parrafo.slice();
```

#### split

este metodo retorna una lista basandose en un separador que se le indique

```js
let parrafo = "solo se que nada se";
parrafo.split(""); //["solo","se","nada","nada","se"]
let url = "google.com/search?=gatitos";
let gatito = url.split("="); //["google.com/search?=gatitos"]
console.log(gatito[1]); //gatitos
let listaFrutas = "manzana,tomate,pera,naranja";
listaFrutas, split("=");
```

### 6.2 Metodos para listas - Arrays

#### Crear una lista

```js
let lista = [];
```

#### Agregando elementos a una lista

```js
lista[0] = "manzana";
```

#### Agregando elemetos al final de una lista

El metodo `push` agrega elementos al final de una lista

```js
let lista = [];
lista.push("manzana");
```

#### Agregando elementos al inicio de una lista

el metodo `unshift` agrega elelmtos al inico de una lista

```js
let amigos = ["ronny", "lisbet", "josema"];
amigos.unshift("ronald");
```

#### Removiendo elementos de una lista

el metodo `pop` al contrario de push extrae el ultimo elemento de una lista

```js

```

#### shift

el metodo `shift` al contrario de un unshift extrae el primer elemento

#### Eliminando el elemento de una lista

#### delete

eliminina un elemento en base a su indice

```js
let texto = ["hola", "como", "", "estas"];
delete texto[2];
```

#### splice

este metodo elimina el elemento en base a su pocision (indice)y a la cantidad elemntos a eleiminar

```js
let vocals = ["a", "e", "e", "i", "o", "u"];
vocals.splice(2, 1);
vocals;
```

#### Conbinando o uniendo listas((Array))

#### concat

este metodo crea un nuevo array que contiene los elemntos del array original seguido por los elemenentos de uno o mas array proporcionado

```js
let friends = [];
let amigosPriamria = ["alfredo", "luis", "edgar"];
let amigossecundaria = ["edison", "remmy", "miguel"];
let amigossuperior = ["josue", "marlon", "handy"];
friends = amigosPriamria.concat(amigossecundaria, amigossuperior);
```

### Metodos para iterar una lista

#### forEach

este metodo ejecuta una funcion anonimo por cada elemento de un array

```js
let numeros = [1, 2, 3, 4, 5];
numeros.forEach((n) => {
  console.log(n);
});
```

#### Map

este metodo ejecuta una funcion anonoma por cada elemento de un array,
generando una nueva lista

```js
let numeros = [1, 2, 3, 4, 5];
numerosnuevos = numeros.map((n) => {
  return n + 1;
});
```

#### Metodos para buscar elementos en una lista

#### includes

este metodo busca un valor en especifico y devuelbe un valor booleano en caso de encontrar el valor buscado retorna true
caso contrario false

```js
let vocals = ["a", "i", "o", "u"];
let buscaE = vocals.includes("e");
//retorna false
let buscaA = vocals.includes("a");
//retorna true
let fruits = ["pera", "higo", "tomato"];
let estaPera = fruits.includes("pera");
console.log(pera);
```

#### filter

este metodo se usa para encontrar elelmentos dentro de una lista que cumplan con cierta condicion

```js
let numeros = [2, 4, 5, 7, 8, 1, 2, 6];
//deseo una lista con los numeros que sean menor a cuatro
let nuevossNumeros = numeros.filter((n) => {
  n < 4;
});
```

#### find

este metodo se usa para encontrar el primer elemento que cumpla con cierta condicio, a diferencia de `filter` solo retorna un elemento el que conicida con la condicion

```js
let lisnumeros = [10, 11, 3, 20, 5];
//devolver el numero menor a dies
let menorDiez = lisNumeros.find((n) => {
  return n > 10;
});
console.log(menordiez);
```

### 6.3 Metodos para objetos

### creando un objeto

```js
let objeto = {};
```

#### Agregando

recuerden que el elemento esta conformado por`clavevalor`

```js
objeto["nombre"] = "Ronald";
objeto["edad"] = 18;
objeto["CUI"] = 45454545;
```

#### como actualizamos un objeto

para realizar l actualizacion del valor de una elemento temenmos que acceder a traves de su clave y asignar el nuevo valor
**obsevacion** la clave debe ser la misma a actualizar de no existir creara una nueva

```js
objeto["edad"] = 20;
```

#### Eliminado un elemento de un objeto

para eliminar un elemneto de un objeto hacemos uso de una operador unario
`delete`.

```js
delete objeto.CUI;
```

### Acceder

### Modificarffffsfsf

### Crear

### Insertar

### Eliminar

### Ordenar

## 7. es6

### Arrow function

## destructuracion

este es una tecnica para el empaquetado de listas u objetos en variables
esta tecnica faculita el acceso a los elementos de una lista u objeto

```js
let alumno = {
  nombre: "miguel",
  edad: "17",
};
cosole.log(alumno.nombre);
console.log(alumno["edad"]);
//desestrcuturacion
let { nombre, edad } = alumno;
```

## 8. DOM

- segun sus siglas es Modelo deObjeto de Documento
- para la web es una API del navegador ,eson significa que nos proporciona una interfas para comunicarnos entrer html y javascript.
- Segun su funcionalidad DOM e el encargado de convertir documento `html` y `css` en objetos de `javascript` , o en un arbol de objetos.
- Para `javascript` el `DOM` es un objeto con el que podemos leer y modificar a nuestro antojo.
- La manera como DOM nos permite interactuar con nuestro documentos `html` y `css` son a traves de `selectores`.

### Selectores

Es la manera de como podremos manipular el `DOM` este es primer paso que devemos dominar para realizar operaciones de lectura o modificasion

#### Captura de elementos

##### Selectores tradicionales

Estos selectores son metodos de documento porque`DOM` trabaja con el documento.

```js
//selector de id
document.getElemntByid("mi_div"
//retornar ub ejemplo todos los elementos
//<section id="mi_div"></section>
//--selectores por su atributo name
//<input name="dni" value="34556"><>
//dni="34556"
document.getElementByName("dni")
document.setElemntTagName("dni")
//--Selectores por su tag
//<h1></h1>
document.getElementByTagName("h1")
)
//--selectores por sus clases
//<div class=rojo></div>
document.getElemntByName
```

> [!tip] es la programacion web `DAW` se hace el uso de dos tecnicas , 1. obtecion de datos(get), 2. creacion de datos(set)

##### Selectores modernos o avanzado

```js
//para la captura de un elemento, o el primer elemnto que coincida con la busqueda
document.querySelector();
//para la captura de un elemento, o el primer elemnto que coincida con la clase
document.querySelector(".nombre_clase");
//para la captura de un elemento, o el primer elemnto que coincida con el nombre del id
document.querySelector("#nombre_id");
//para la captura de un elemento, o el primer elemnto que coincida con el nombre de la etiqueta
document.querySelector("p");
document.querySelector(".imput[nmae="dni"]");
//para acceder a todas las coincidencias
//esto retorna un array con todas las coincidencias
document.querySelectorAll(".nombre_clase");
```

##### Acceder a contenido y actualizar contenido, crear y remover atributos

una ves capturado el elemento con `querySelector` pueden hacer uso de `textContent ` para accder al contenido del elemnto , de esta mismo forma podemos editar o actualizar el contenido `textContnt="hola"` esto lo que es astualizar el contenido anterior con el contenido que se le asignado.
`textContend` solo solo se ussa si desemaos agreagr contenido de tipo texto .si deseaamos setear o agreagr contenido de tipo `html` se debera usar `innerHTML`.

```js
//<p id="text">este es un contenido</p>
let etiquetap = document.querySelector("#text");
console.log(etiquetaP.textContent);
//este es un contenido
etiquetaP.textContent = "nuevo texto";
console.log(etiquetaP.textContent);
//nuevo texto

//<p id="text">este es un contenido</p>
let div = document.querySelector("#contenedor");
div.innerHTML = "<p>parrafo</p>">este es un
```

una ves conocido la forma de capturar elementos `html` y la forma de setear contenido (`textContent`) y html(`innerhtml`), tambien podemos setear atributos y removerlos.

```js
//<div>contenido</div>
//data-description
let contenido = document.querySelector("#contenido");
// entre parentecis van dos parametros primero el nombre del atributo a crear y segundo el valor que debe tener
contenido.setAtribute(
  "datra-description",
  "valor de mi data-description"
  //<div id="contenido" data-description="valor de mi data-description">contenido</div>
);
//eliminar el atributo creado
//entre parentesis el nombre del atributo que se va eliminar
contenido.removeAtribute("data-description");
```

#### Aggregar y eleiminar elementos

para crear nuevo elemento no necesitamos capturar un elemento orque crearemos un elemento nuevo

```js
let nuevoEtiquetaP = document.createElemnt("p");
//agreagar contenido a mi etiqueta
nuevoEtiqurta.textContent = "informacion en el parrafo";
//para que  esta ainformacion araresca de manera visible en mi html debemos agragarlo a un elemen to padre
/*
<body>
</body>
*/
let body = document.querySelector("body");
//hacer uso del metodo que me permite asignarle nuevos hijos
body.appenChild(nuevoEtiquetap);
//deseo elimianr  ese lemento que acabo de crear
// usamos el nombre del elemnto a eliminar y luego usamos el metodo remove()
nuevoEltiqueta.remove();
```

#### Modifigcar clases y eltilos

estos metodo que veremos a continuacion nos pertiran cambiar de manera intractiva los estilos css que se puedan aplicar a ciertos elementos pero haciendo uso de javascriipt y logrando sus cambios de estilo de manra dinamica.
con estos metodos agraggamos clases que existan
**index.html**

```html

```

- archivo **style.css**

```css
.color-fondo-rojo {
  background-color: red;
}
```

- archivo **script.js**

```js
//agragar a mi section el fondo rojo
let setion = document.querySelector("#principal");
section.classList.add("color-fondo-rojo");
//eliminar la clase
section.class.backgroundColor = "red";
//<div></div>
let caj = document.querySlector("div");

//para gragar una clase
```

#### Eventos (Tarea-averiguar)

Existen situaciones en las que necesitamos realizar una accion **cuando un determinado caso**, esto se puede trabajar con un `if` o puedo trabajar con un `estructura de decision` o puede trabajar con un `estructura de repeticion(bucle)` esto se puede maneja r de esta manera cuando sabemos que tiene que suceder.
Existen situaciones en la que no sabemos exactamente cuando tenemos que activar buestra funcionalidad ,por ejemplo,no podemos **cuando** un usuario de nuestra pagina hara click en un botton , o en que momento reproducira una cansion o lo pausara, es esta situacion es cuando tenemos que manejar la funcionalidad a traves de **eventos**.

#### Que es un evento

Es una notificasion de una caracteristica que acaba de suceder.
O es la ejecusion de una funcionalidad
Veamos algunos ejemplos de eventos clasicos:

- Eventos `click`
- Evento `keydown` pulsamos una tecla.
- Evento `play`.
- Evento `wheel`:scroll con la rueda.
- Evento `beforeprint`:cuando el usuario activa la opsion de imprimir.
  **Tenemos dos maneras de manejar eventos **

#### 1. Eventos de HTML

Podemos escuchar los eventos atraves de atributos de un elemento html
**index.html**

```html
<button onclick="alert('hola')">Saludar</button>
```

#### 2. Eventos de JavaScript

La opsion **recomendada** maneja r los eventos desde ficheros (archivo) `.js`.
Esto evita tener nombres sueltos de funciones en HTML, que luego tenemos que actualizar y mantener.

#### Captura evento, metodo addEventListener

este evento recibe dos parametros , el evento y la funcion a ejecutar.
Para conocimiento el metodo `addEventListener(event,func)` es una funcion que se conporta como una funcion de tipo `callback`.

```js

```
