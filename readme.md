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

### Acceder

### Modificarffffsfsf

### Crear

### Insertar

### Eliminar

### Ordenar
