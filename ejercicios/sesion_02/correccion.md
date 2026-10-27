# Corrección — Sesión 2

¡Muy buen trabajo! Se nota el avance respecto de la sesión 1: todo está tipado, el archivo corre con `npx tsx casosTest.ts` y `npx tsc --noEmit` no marca ningún error en la carpeta.

## Lo que está bien

- La interface `CasoDeTest` tiene las cuatro propiedades con los tipos pedidos.
- El array está tipado con la interface y tiene 3 casos.
- `obtenerCasosDeTest` devuelve `Promise<CasoDeTest[]>` y resuelve a los 500ms, tal como pedía la consigna.
- Usaste `try/catch` con `await`, que es una buena práctica aunque no se pedía.
- Probaste las dos formas de consumir la promesa (`.then` y `async/await`), muy bien para practicar.
