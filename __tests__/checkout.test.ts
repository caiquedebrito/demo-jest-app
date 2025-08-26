import { Cart } from '../src/services/cart';
import { checkout } from '../src/controllers/checkout';
import { InventoryService } from '../src/services/inventory';
import type { PaymentGateway } from '../src/services/paymentGateway';

class PaymentStub implements PaymentGateway {
  charge = jest.fn(async (amountInBRL: number) => 'tx_123');
}

describe('checkout', () => {
  it('verifica estoque, reserva e cobra o valor correto', async () => {
    const cart = new Cart();
    cart.addItem({ id: 'p1', title: 'Teclado', priceCents: 1299 }, 1);

    const inv = new InventoryService({ p1: 1 }, 0);
    const pg = new PaymentStub();

    const order = await checkout(cart, inv, pg);

    // Deve cobrar R$ 12,99 (converter 1299 centavos -> 12.99 BRL)
    expect(pg.charge).toHaveBeenCalledWith(12.99);

    // Estoque deve ir para 0 após reserva
    await expect(inv.getAvailable('p1')).resolves.toBe(0);

    expect(order.paid).toBe(true);
    expect(order.totalCents).toBe(1299);
  });
});
