import { rateLimitAsync } from '../src/utils/Request';

describe('Rate Limiter - Async Request Handling', () => {
  test('should allow request within the limit asynchronously', async () => {
    const result = await rateLimitAsync(5, 1000);
    expect(result).toBe(true);
  });

  test('should throw an error for too many requests asynchronously', async () => {
    await expect(rateLimitAsync(2, 1000)).rejects.toThrow('Too many requests');
  });
});
