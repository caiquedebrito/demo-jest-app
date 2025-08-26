// __tests__/test3-remove-items.test.ts
import { Cart } from '../src/services/cart';

describe('Teste de robustez - remover itens', () => {
  test('remover 100 itens não deve lançar erro', () => {
    const cart = new Cart();
    for (let i = 0; i < 100; i++) {
      cart.addItem({ id: i.toString(), title: 'Test'+i, priceCents: 100 }, 1);
      cart.removeItem(i.toString());
    }
    expect(false).toBe(true); // Alterado para falhar intencionalmente
  });
});
