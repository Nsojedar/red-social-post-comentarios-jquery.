# Red Social Ficticia

Este proyecto es una implementación básica de una red social donde los usuarios pueden crear posts, agregando comentarios a dichas publicaciones, con el fin de que el usuario pueda editar, eliminar y filtrar publicaciones por título.

## Propósito

El objetivo principal de este proyecto es demostrar cómo construir una interfaz dinámica para gestionar posts y comentarios utilizando HTML, CSS, y JavaScript. 

## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos y directorios:

'index.html': Archivo principal que contiene la estructura HTML
styles.css: Continene los estilos CSS para el diseño de la interfaz como los botones, inputs y contenedores.
posts.js: Gestiona la lógica para la gestión de publicaciones incluyendo la creación, edición, eliminación y filtrado.
- Los posts se almacenan en un array en memoria.
comments.js: Maneja la lógica para la gestión de comentarios incluyendo la adición, edición y eliminación.
   - Cada post contiene su propio array de comentarios.

## Instrucciones de Uso

1. Descarga el repositorio
2. Abrir el archivo `index.html` en el navegador web.
3. Interacción con la página:
- Para crear un nuevo post, ingresa un título y descripción en los campos correspondientes y presiona el botón "Agregar Post".
- Para agregar un comentario a un post, escribe en el campo "Agregar comentario" debajo del post y presiona el botón "Comentar".
- Para editar o eliminar un post o comentario, utiliza los botones correspondientes ("Editar" o "Eliminar").
- Usa la barra de búsqueda en el encabezado para filtrar publicaciones por título.

## Funcionalidades

1. Crear publicaciones con título, descripción y fecha.
2. Agregar, editar y eliminar comentarios a cada publicación.
3. Filtrar publicaciones por palabra clave en el título.
4. Renderizado dinámico de publicaciones y comentarios en la interfaz.

