# Corrección — Sesión 3: Playwright primer contacto

**Archivos corregidos:** `tests/sesion3.spec.ts` y `tests/saucedemo.spec.ts`

¡Muy buen trabajo!

## Verificación

- `npx playwright test` → los 4 tests pasan en verde en los 3 navegadores (chromium, firefox y webkit): 12 de 12.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1–3 | Instalar Playwright | ✅ | Config, carpeta `tests` y navegadores OK. |
| 5 | Test 1: título con `toHaveTitle` | ✅ | |
| 6 | Test 2: agregar tarea | ✅ | Usa `getByPlaceholder`, `fill`, `press('Enter')` y `getByText` + `toBeVisible`, tal como pedía la consigna. |
| 7 | Test 3: marcar tarea como completada | ✅ | Muy buena idea filtrar por "Completed" para comprobarlo. Ver tip abajo. |
| 8 | `saucedemo.spec.ts` con un único test | ✅ | |
| 9 | Login | ✅ | Verifica con la URL de inventario. También vale; la consigna sugería el título "Products". |
| 10 | Agregar al carrito y verificar que el ícono muestra 1 | ❌ | La verificación no comprueba el número del carrito (ver abajo). |
| 11 | Abrir el carrito | ✅ | |
| 12–13 | Checkout y resumen | ✅ | |
| 14 | Mensaje "Thank you for your order!" | ✅ | |

## A corregir

1. **La verificación del carrito no comprueba el "1".** `toHaveCount(1)` cuenta cuántos elementos encuentra el locator, y el link del carrito siempre existe una sola vez, tenga productos o no. O sea, el `expect` pasaría aunque el producto no se haya agregado. Lo que muestra el número es el badge del carrito:

   ```ts
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
   ```

## Detalles menores

- No hace falta hacer `click()` antes de `fill()`: `fill` ya hace foco en el campo solo. Esos clicks los agrega el codegen y se pueden borrar.
- En el test 3 otra forma más directa de verificar el estado es comprobar el checkbox: `await expect(page.getByRole('listitem').filter({ hasText: 'Tarea 1' }).getByLabel('Toggle Todo')).toBeChecked();`
