1. **Guardar y subir la imagen:**
* Guarda el archivo de imagen en tu equipo local con un nombre descriptivo en formato `.jpg` (ejemplo: `nueva-noticia.jpg`).
* Sube la imagen a la carpeta de imágenes del proyecto (`noticias/imagenes/`).


2. **Abrir el archivo JSON e incrementar la lista:**
Abre el archivo JSON y suma un elemento a la lista de noticias manteniendo la misma estructura de los elementos anteriores.

Estructura de ejemplo:

```json
{
  "id": 0,
  "titulo": "",
  "descripcion": "",
  "imagen_url": "",
  "fecha": ""
}

```

//Recordar poner una coma despues del elemento anteiror a la nueva noticia)


3. **Asignar el ID correspondiente:**
Agrégale el ID que corresponde según la lista actual (en este caso, `"id": 4`).


4. **Llenar título y descripción:**
Llena los campos `"titulo"` y `"descripcion"` con la información correspondiente a la noticia.


5. **Agregar la dirección URL de la imagen:**
Agrega la dirección URL con el nombre de la imagen subida para la noticia.

Ejemplo de campo `imagen_url`:

```json
"imagen_url": "https://jalejandrojb.github.io/notiticas-api/noticias/imagenes/nueva-noticia.jpg"

```


6. **Agregar la fecha:**
Agrega la fecha en la que se publica la noticia en formato `AAAA-MM-DD` (ejemplo: `"2026-09-14"`).
