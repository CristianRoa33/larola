import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { app } from '../Firebase/Config';
import { getFirestore } from 'firebase/firestore';

describe('Firebase Configuration', () => {
  it('debe cargar las variables de entorno correctamente', () => {
    expect(import.meta.env.VITE_FIREBASE_API_KEY).toBeDefined();
    expect(import.meta.env.VITE_FIREBASE_PROJECT_ID).toBeDefined();
    expect(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN).toBeDefined();
  });

  it('debe inicializar Firebase correctamente', () => {
    expect(app).toBeDefined();
  });

  it('debe obtener la instancia de Firestore', () => {
    const db = getFirestore(app);
    expect(db).toBeDefined();
  });
});
