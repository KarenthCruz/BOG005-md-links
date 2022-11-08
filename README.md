# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Documentación](#3-documentación)
* [3.1. API](#3.1-API)
* [3.2. CLI](#3.2-CLI)
* [4. Guía de uso e instalación ](#4-Guía-de-uso-e-instalación)
* [5. Diagrama de flujo](#5-diagrama-de-flujo)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.


## 2. Resumen del proyecto

kcruz-md-links, es una librería creada para extraer links que se encuentran dentro de archivos tipo markdown. Además de la información sobre los enlaces, podras obtener las estadísticas (enlaces únicos y rotos) y la validación HTTP de los mismos. 


## 3. Documentación

### 3.1 API

La biblioteca se importa y usa de acuerdo al siguiente ejemplo:

const {mdLinks} = require('kcruz-md-links');

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
* `options`: Un objeto con **únicamente** las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.
  - `stats`: Booleano que determina si se desea obtener un output
    con información estadística general.

##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelve un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades
Con `validate:false` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
Con `validate:true` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito

Ejemplos (Resultados):
```js
const {mdLinks} = require('kcruz-md-links');

mdLinks("./some/example.md", { validate: false })
  .then(links => console.log(links)
    // => [{ href, text, file }, ...]
  )
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => console.log(links)
    // => [{ href, text, file, status, ok }, ...]
  )
  .catch(console.error);

mdLinks("./some/dir", { validate: false })
  .then(links => console.log(links)
    // => [{ href, text, file }, ...]
  )
  .catch(console.error);

mdLinks("./some/dir", { validate: true })
  .then(links => console.log(links)
    // => [{ href, text, file, status, ok }, ...]
  )
  .catch(console.error);
```

### 3.2 CLI (Interfaz de Línea de Comando)

Para ejecutar md-links en la terminal, debe ingresarse de la siguiente manera:
`md-links <path-to-file> [options]`

El programa MD-links recibe una ruta relativa o absoluta como primer parametro y permite las siguientes opciones como entrada.
- Validate
- Stats
Si solo es ingresada la ruta, el resultado sera la ruta, el link y el texto del link.
```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```
Si ingresas la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```
Si ingresas la opción --stats, obtendras estadisticas basicas sobre los links.
```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```
Y si se combinan las opciones --validate & --stats obtendras estadísticas que necesiten de los resultados de la validación.
```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

### 4. Guía de uso e instalación 

Para usar el modulo, lo puedes instalar con el siguiente comando desde tu terminal: 
```sh
npm i kcruz-md-links
```
Este módulo incluye un ejecutable como una interfaz que se puede importar con require.
```sh
const {mdLinks} = require('kcruz-md-links')
```
los comandos validos de opciones desde la terminal son:
```sh
--stats
--validate
--stats --validate
```
Para ver los resultados de ambos comando revisar la documentación tecnica de la libreria.
para ejecutarlo desde el CLI:
```sh
md-links <path-to-file> [options]
```

### 5. Diagrama de flujo (Anexos)

Para la ejecución del proyecto se tuvo en cuenta el siguiente diagrama de flujo:

![Diagrama API](https://github.com/KarenthCruz/BOG005-md-links/blob/b8cd6d51c4a96aee9e7d9477ca6c8221ac97e890/src/img/flujo-API.jpg)
![Diagrama CLI](https://github.com/KarenthCruz/BOG005-md-links/blob/b8cd6d51c4a96aee9e7d9477ca6c8221ac97e890/src/img/flujo-CLI.jpg)






