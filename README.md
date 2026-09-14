**1. Subir la foto**

* Guarda la imagen localmente con un nombre descriptivo (ej. `nueva-noticia.jpg`).
* Sube el archivo al repositorio en la carpeta `noticias/imagenes/`.
* Copia la URL pública resultante:
`[https://jalejandrojb.github.io/notiticas-api/noticias/imagenes/nueva-noticia.jpg](https://jalejandrojb.github.io/notiticas-api/noticias/imagenes/nueva-noticia.jpg)`

**2. Llenar los espacios de la lista**

* Asigna el nuevo ID correlativo (`"id": 4`).
* Añade los datos de la noticia usando la URL de la foto y la fecha actual (`AAAA-MM-DD`):
```json
{
  "id": 4,
  "titulo": "Título de la noticia",
  "descripcion": "Descripción del evento.",
  "imagen_url": "https://jalejandrojb.github.io/notiticas-api/noticias/imagenes/nueva-noticia.jpg",
  "fecha": "2026-09-14"
}

```


* Coloca una coma `,` al final del elemento anterior (`id: 3`), pega la nueva estructura al final del arreglo JSON antes del corchete `]` y guarda los cambios.
