# Testing Guide - La Rola

## 📋 Descripción

Este proyecto incluye tests automatizados para verificar que el código funciona correctamente.

## 🧪 Archivos de Test

### 1. **Firebase.test.js** - Tests de configuración
- ✅ Verifica que las variables de entorno se cargan
- ✅ Valida la inicialización de Firebase
- ✅ Comprueba la conexión a Firestore

### 2. **Item.test.js** - Tests del componente Tarjeta
- ✅ Renderiza correctamente el componente Item
- ✅ Muestra la imagen del producto
- ✅ Valida el botón "Ver Mas"

### 3. **CartContext.test.js** - Tests del contexto del carrito
- ✅ Carrito inicia vacío
- ✅ Agrega productos correctamente
- ✅ Calcula el precio total

### 4. **Db.test.js** - Tests de Firestore
- ✅ Obtiene todos los productos
- ✅ Estructura correcta de datos
- ✅ Filtra por categoría
- ✅ Obtiene producto por ID
- ✅ Maneja IDs inexistentes

## 🚀 Cómo ejecutar los tests

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests en modo observación (watch)
```bash
npm test -- --watch
```

### Ejecutar tests con interfaz gráfica
```bash
npm run test:ui
```

### Ejecutar un test específico
```bash
npm test Firebase.test.js
```

### Ver cobertura de tests
```bash
npm test -- --coverage
```

## ✅ Estado de los Tests

Los tests verifican:
1. **Seguridad**: Validación de variables de entorno
2. **Funcionalidad**: Componentes y contextos funcionan correctamente
3. **Datos**: Firestore carga y filtra productos correctamente
4. **Estructura**: Los datos tienen la estructura esperada

## 📝 Agregar más tests

Crea archivos nuevos en `src/__tests__/` con el patrón:
```javascript
import { describe, it, expect } from 'vitest';

describe('Nombre del test', () => {
  it('debe hacer algo', () => {
    expect(true).toBe(true);
  });
});
```

## 🔧 Solución de problemas

Si algún test falla:
1. Lee el mensaje de error en la consola
2. Verifica el código que está siendo testeado
3. Asegúrate de que las variables de entorno están correctas
4. Comprueba que Firestore está conectado

---
**Última actualización**: 13 de marzo de 2026
