import { isRequestAllowedFromIP } from '../src/utils/rateIPLimiter';

describe('Rate Limiter - Multiple IPs', () => {
  test('should allow requests within the limit for different IPs', () => {
    expect(isRequestAllowedFromIP('192.168.0.1', 3, 1000)).toBe(true);
    expect(isRequestAllowedFromIP('192.168.0.2', 3, 1000)).toBe(true);
  });

  test('should deny requests exceeding the limit for the same IP', () => {
    isRequestAllowedFromIP('192.168.0.1', 3, 1000); // 1º request
    isRequestAllowedFromIP('192.168.0.1', 3, 1000); // 2º request
    expect(isRequestAllowedFromIP('192.168.0.1', 3, 1000)).toBe(false); // Terceiro request, negado
  });

  test('´deveria permitir reqquisições para diferentes IPs mesmo se 1 passe do limite', () => {
    isRequestAllowedFromIP('192.168.0.1', 3, 1000);
    isRequestAllowedFromIP('192.168.0.1', 3, 1000);
    isRequestAllowedFromIP('192.168.0.1', 3, 1000);
    expect(isRequestAllowedFromIP('192.168.0.2', 3, 1000)).toBe(true); // Outro IP
  });
});
