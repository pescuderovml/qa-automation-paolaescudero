# Corrección — Sesión 1

¡Buen trabajo! El archivo corre con `npx tsx casos-test.ts` sin romperse, y los puntos 1 a 4 funcionan bien. Quedan algunos detalles para ajustar, sobre todo en el punto 5 y en los tipos.

## Lo que está bien

- El array tiene 6 casos con las cuatro propiedades pedidas.
- `contarPorPrioridad` devuelve bien el conteo: `{ alta: 2, media: 2, baja: 2 }`.
- `listarPendientes` devuelve solo los casos con `ejecutado: false`.
- Trabajaste en una rama nueva y subiste los cambios.

## A corregir

### 1. `formatearCaso` (punto 5)

Hay tres cosas para ajustar:

- La consigna pide una **arrow function**, y está escrita como función tradicional.
- Tiene que recibir **un solo caso** y **devolver** un string. Ahora recibe todo el array y hace el `console.log` adentro.
- El título está fijo como `"Login Valido"` en lugar de usar `caso.titulo`, y el estado muestra `Pendiente: true` cuando debería decir `Ejecutado` o `Pendiente`.

Salida actual:

```
#1 - Login Valido (alta) - Pendiente: true
```

Salida esperada:

```
#1 - Test Case 01 (alta) - Ejecutado
```

Una forma de escribirla:

```ts
const formatearCaso = (caso: CasoDePrueba): string => {
    const estado = caso.ejecutado ? "Ejecutado" : "Pendiente"
    return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`
}
```

### 2. El `forEach` va afuera (punto 6)

Como `formatearCaso` ahora devuelve un string, el `forEach` queda al final del archivo:

```ts
testcases.forEach((caso) => {
    console.log(formatearCaso(caso))
})
```

### 3. Faltan los tipos (punto 7)

`npx tsx` ejecuta el archivo pero **no revisa los tipos**. Si corrés `npx tsc --noEmit` aparecen 8 errores en `casos-test.ts`, todos del mismo estilo:

```
Parameter 'casos' implicitly has an 'any' type.
```

Se resuelve definiendo un tipo para el caso y usándolo en el array y en los parámetros:

```ts
type CasoDePrueba = {
    id: number
    titulo: string
    prioridad: "alta" | "media" | "baja"
    ejecutado: boolean
}

const testcases: CasoDePrueba[] = [ ... ]

function contarPorPrioridad(casos: CasoDePrueba[]) { ... }

function listarPendientes(casos: CasoDePrueba[]): CasoDePrueba[] { ... }
```
