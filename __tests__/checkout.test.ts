import { Cart } from '../src/services/cart';
import { checkout } from '../src/controllers/checkout';
import { InventoryService } from '../src/services/inventory';
import type { PaymentGateway } from '../src/services/paymentGateway';

/**
 * Conceito e Uso de Stubs em Testes
Um stub é um tipo de objeto simulado (mock object) usado em testes unitários para substituir componentes reais que seu código em teste depende. Os stubs fornecem respostas pré-definidas às chamadas feitas durante o teste, sem executar nenhum comportamento real.

Características principais dos stubs:
Substitutos simplificados: Implementam a mesma interface que a dependência real, mas com comportamento controlado
Respostas predeterminadas: Retornam valores fixos ou programados
Sem lógica complexa: Não processam entradas de forma elaborada
Focados em isolamento: Permitem testar uma unidade de código independentemente de suas dependências
 */
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
