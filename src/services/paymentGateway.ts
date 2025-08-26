export interface PaymentGateway {
  // valor em BRL (ex.: 12.99)
  charge(amountInBRL: number): Promise<string>;
}

export class FakePaymentGateway implements PaymentGateway {
  async charge(amountInBRL: number): Promise<string> {
    if (amountInBRL <= 0) throw new Error('Invalid amount');
    return 'pay_' + Math.random().toString(36).slice(2);
  }
}
