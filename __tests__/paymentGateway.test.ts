import { FakePaymentGateway } from '../src/services/paymentGateway';

describe('FakePaymentGateway', () => {
  let gateway: FakePaymentGateway;

  beforeEach(() => {
    gateway = new FakePaymentGateway();
  });

  it('deve retornar um id de pagamento quando o valor é válido', async () => {
    const tx = await gateway.charge(12.99);

    // Deve começar com prefixo "pay_"
    expect(tx).toMatch(/^pay_/);

    // Deve ter pelo menos alguns caracteres após o prefixo
    expect(tx.length).toBeGreaterThan(5);
  });

  it('deve lançar erro se o valor for zero ou negativo', async () => {
    await expect(gateway.charge(0)).rejects.toThrow('Invalid amount');
    await expect(gateway.charge(-50)).rejects.toThrow('Invalid amount');
  });
});
