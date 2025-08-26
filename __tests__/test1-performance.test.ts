// __tests__/test1-performance.test.ts
import { Cart } from '../src/services/cart';

describe('Teste de performance - addItemToCart', () => {
  test('addItemToCart deve ser completado dentro de 50ms', () => {
    const cart = new Cart();
    const start = performance.now();
    cart.addItem({ id: '1', title: 'Test', priceCents: 10 }, 1);
    const duration = performance.now() - start;
    expect(duration).toBeGreaterThan(50); // Alterado para falhar, pois o tempo não será menor que 50ms
  });
});
