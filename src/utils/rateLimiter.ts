export function debounce<F extends (...args: any[]) => void>(fn: F, waitMs: number) {
  let timer: any;
  return (...args: Parameters<F>) => {
    fn(...args);
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}
