---
sidebar_position: 5
---

# Snippets: Fragmentos de Código en el Navegador

Los **Snippets** (fragmentos) son mini scripts que puedes escribir, guardar y ejecutar directamente desde la pestaña **Sources**, sin necesidad de tocar tus archivos locales. Son ideales para probar ideas rápidas, automatizar tareas recurrentes o realizar debugging.

---

## 1. ¿Dónde encontrar los Snippets?

1. Abre el Inspector de Elementos (`Ctrl + Shift + I` o `F12`).
2. Ve a la pestaña **Sources**.
3. En el panel izquierdo, desplázate hasta que veas la sección **Snippets**.

---

## 2. Crear un Snippet nuevo

1. Haz clic derecho sobre **Snippets** → **New**.
2. Asigna un nombre descriptivo, por ejemplo `cambiar-fondo.js`.
3. Escribe tu código en el editor que aparece a la derecha.

```js
// Ejemplo: cambia el fondo de la página a un color aleatorio
(function cambiarFondo() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
})();
