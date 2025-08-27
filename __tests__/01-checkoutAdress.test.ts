// __tests__/checkout.test.ts

import { validateAddress } from '../src/controllers/checkoutAdress';  // Corrigido caminho

describe('Checkout Controller - Address Validation', () => {
  test('should return true for valid address', () => {
    const result = validateAddress('123 Main St, Springfield, IL');
    expect(result).toBe(true);
  });

  test('should return false for address with insufficient length', () => {
    const result = validateAddress('12 St');
    expect(result).toBe(false);
  });

  test('should return false for address with invalid characters', () => {
    const result = validateAddress('123 Main St #$@');
    expect(result).toBe(false);
  });
});
