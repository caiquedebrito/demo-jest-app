// __tests__/test5-large-item.test.ts
import { Cart } from '../src/services/cart';

describe('Teste de performance - adicionar um item grande', () => {
  test('adicionar um item grande deve ser concluído dentro de 500ms', () => {
    const cart = new Cart();
    const largeItem = { id: '1', title: 'Heavy Item', priceCents: 1000, description: 'Uma descrição muito longa '.repeat(100) };
    const start = performance.now();
    cart.addItem(largeItem, 1);
    const duration = performance.now() - start;
    expect(duration).toBeLessThanOrEqual(500);  // Ajustado para 500ms
  });
});
