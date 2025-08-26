// debounce com BUG: chama a função imediatamente (deveria esperar)
export function debounce<F extends (...args: any[]) => void>(fn: F, waitMs: number) {
  let timer: any;
  return (...args: Parameters<F>) => {
    fn(...args); // BUG: chamada imediata indevida
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}
