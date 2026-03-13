import { describe, it, expect, beforeAll } from 'vitest';
import { getproductos, filtrarCategoria, getProducto } from '../Firebase/Db';

describe('Funciones de Firestore', () => {
  it('debe obtener todos los productos', async () => {
    const productos = await getproductos();
    
    expect(Array.isArray(productos)).toBe(true);
    expect(productos.length).toBeGreaterThan(0);
  });

  it('debe tener estructura correcta de productos', async () => {
    const productos = await getproductos();
    
    const primerProducto = productos[0];
    expect(primerProducto).toHaveProperty('Titulo');
    expect(primerProducto).toHaveProperty('Categoria');
    expect(primerProducto).toHaveProperty('imagen');
    // El campo de precio puede ser "Precio", "precio" o "Preu"
    expect(
      primerProducto.precio || primerProducto.Precio || primerProducto.Preu
    ).toBeDefined();
  });

  it('debe filtrar productos por categoría', async () => {
    const categoriasDisponibles = ['Hombres', 'Mujeres', 'Niños'];
    
    for (const categoria of categoriasDisponibles) {
      const productos = await filtrarCategoria(categoria);
      
      expect(Array.isArray(productos)).toBe(true);
      
      // Verificar que todos los productos filtrados pertenecen a la categoría
      productos.forEach(producto => {
        expect(producto.Categoria).toBe(categoria);
      });
    }
  });

  it('debe obtener un producto por ID', async () => {
    const productos = await getproductos();
    
    if (productos.length > 0) {
      const primerProducto = productos[0];
      const productoObtenido = await getProducto(primerProducto.id);
      
      expect(productoObtenido).toBeDefined();
      expect(productoObtenido.Titulo).toBe(primerProducto.Titulo);
    }
  });

  it('debe retornar undefined para ID inexistente', async () => {
    const productoInexistente = await getProducto('id-que-no-existe-12345');
    
    expect(productoInexistente).toBeUndefined();
  });
});
