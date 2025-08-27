import { calculateTax } from '../src/controllers/TaxCheckout';

describe('Checkout Controller - Calcular impostos', () => {
  test('Deveria calcular impostos corretamente', () => {
    const tax = calculateTax(100, 0.1);  // 10% impostos em 100
    expect(tax).toBe(10);
  });

  test('Deveria jogar um erro para quantidade negativa', () => {
    expect(() => calculateTax(-100, 0.1)).toThrow('quantidade deve ser positiva');
  });

  test('Deveria calcular impostos com zero rate', () => {
    const tax = calculateTax(100, 0);
    expect(tax).toBe(0);
  });
});
