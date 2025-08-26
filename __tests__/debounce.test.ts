import { debounce } from '../src/utils/rateLimiter';

jest.useFakeTimers();

test('debounce aguarda o tempo antes de chamar', () => {
  const fn = jest.fn();
  const d = debounce(fn, 1000);

  d('a');
  d('b');

  // NÃO deveria ter sido chamado ainda
  expect(fn).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1000);

  // Deve chamar UMA vez, com o último argumento
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith('b');
});
