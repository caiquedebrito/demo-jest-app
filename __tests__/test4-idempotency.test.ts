// __tests__/test4-idempotency.test.ts
import { Cart } from '../src/services/cart';

describe('Teste de idempotência - adicionar o mesmo item várias vezes', () => {
  test('adicionar o mesmo item várias vezes deve resultar em apenas um item', () => {
    const cart = new Cart();
    const item = { id: '1', title: 'Test', priceCents: 100 };
    cart.addItem(item, 1);
    cart.addItem(item, 1);
    expect(cart.getItems().length).toBeGreaterThan(1); // Alterado para forçar falha, esperando mais de 1 item
  });
});
