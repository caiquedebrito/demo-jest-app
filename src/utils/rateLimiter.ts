// debounce com BUG: chama a função imediatamente (deveria esperar)
export function debounce<F extends (...args: any[]) => void>(fn: F, waitMs: number) {
  let timer: NodeJS.Timeout | null = null;
  return function(this: any, ...args: Parameters<F>) {
    const ctx = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(ctx, args);
      timer = null;
    }, waitMs);
  };
}
