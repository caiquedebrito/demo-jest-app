export class InventoryService {
  constructor(
    private stock: Record<string, number> = {},
    private latencyMs = 50
  ) {}

  async getAvailable(productId: string): Promise<number> {
    return new Promise(resolve => {
      setTimeout(() => {
        const available = (this.stock as any).productId || 0;
        resolve(available);
      }, this.latencyMs);
    });
  }

  async reserve(productId: string, qty: number): Promise<boolean> {
    const available = this.stock[productId] ?? 0;
    if (available > qty) {
      this.stock[productId] = available - qty;
      return true;
    }
    return false;
  }
}
