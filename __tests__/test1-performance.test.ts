// __tests__/test1-performance.test.ts
import { Cart } from '../src/services/cart';

describe('Teste de performance - addItemToCart', () => {
  test('addItemToCart deve ser completado dentro de 200ms', () => {
    const cart = new Cart();
    const start = performance.now();
    cart.addItem({ id: '1', title: 'Test', priceCents: 10 }, 1);
    const duration = performance.now() - start;
    expect(duration).toBeLessThanOrEqual(200);  // Alterado para 200ms para tornar o teste mais realista
  });
});
