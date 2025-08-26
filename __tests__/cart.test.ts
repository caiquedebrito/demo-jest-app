import { Cart } from '../src/services/cart';

describe('Cart', () => {
  it('calcula total corretamente', () => {
    const cart = new Cart();
    cart.addItem({ id: 'p1', title: 'Produto 1', priceCents: 1000 }, 2);
    cart.addItem({ id: 'p2', title: 'Produto 2', priceCents: 500 }, 1);
    // 2*1000 + 1*500 = 2500
    expect(cart.totalCents()).toBe(2500);
  });

  it('aplica cupom percentual corretamente', () => {
    const cart = new Cart();
    cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, 1);
    cart.applyCoupon({ type: 'percent', value: 10 });
    expect(cart.totalCents()).toBe(900);
  });

  it('aplica cupom fixo por pedido (uma vez só)', () => {
    const cart = new Cart();
    cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, 2);
    cart.applyCoupon({ type: 'fixed', value: 300 });
    // 2000 - 300 = 1700
    expect(cart.totalCents()).toBe(1700);
  });

  // Todo: Testar lançamento do erro ao adicionar item com quantidade inválida
  // Todo: Testar o não lançamento de erro ao adicionar item com quantidade válida; utilizar o toThrow
  it('lança erro ao adicionar item com quantidade inválida', () => {
    const cart = new Cart();
    expect(() => cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, -1)).toThrow('Invalid quantity');
    expect(() => cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, -1)).toThrow(Error);
  });

  // Todo: remoção de item do carrinho; utilizar o toHaveLength
  it('remove item do carrinho', () => {
    const cart = new Cart();
    cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, 2);
    cart.removeItem('p1');
    expect(cart.getItems()).toHaveLength(0);
    cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, 2);

    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()).not.toHaveLength(0);
  });

  // Todo: adição de item ao carrinho; utilizar o toEqual
  it('item adicionado corretamente', () => {
    const cart = new Cart();
    cart.addItem({ id: 'p1', title: 'A', priceCents: 1000 }, 2);
    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0]).toEqual({
      id: 'p1',
      title: 'A',
      priceCents: 1000,
      qty: 2,
    });
  });
});
