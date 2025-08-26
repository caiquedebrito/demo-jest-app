// __tests__/test2-stress.test.ts
import { Cart } from '../src/services/cart';

describe('Teste de stress - adicionar múltiplos itens', () => {
  test('adicionar 100 itens deve terminar dentro de 200ms', () => {
    const cart = new Cart();
    const start = performance.now();
    for (let i = 0; i < 100; i++) {
      cart.addItem({ id: i.toString(), title: 'Test'+i, priceCents: 100 }, 1);
    }
    const duration = performance.now() - start;
    expect(duration).toBeGreaterThan(400); // Alterado para forçar falha, pois o tempo será menor que 200ms
  });
});
