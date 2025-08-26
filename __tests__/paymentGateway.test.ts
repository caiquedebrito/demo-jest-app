import { FakePaymentGateway } from '../src/services/paymentGateway';

describe('FakePaymentGateway', () => {
  let gateway: FakePaymentGateway;

  beforeEach(() => {
    gateway = new FakePaymentGateway();
  });

  // todo: deve retornar um id de pagamento quando o valor é válido

  // todo: deve lançar erro se o valor for zero ou negativo

  // todo: verificar se a mensagem de erro é apropriada 'Invalid amount'
});
