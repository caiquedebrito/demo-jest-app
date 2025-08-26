export class InventoryService {
  constructor(
    private stock: Record<string, number> = {},
    private latencyMs = 50
  ) {}

  async getAvailable(productId: string): Promise<number> {
    return new Promise(resolve => {
      setTimeout(() => {
        // BUG: acessa this.stock.productId (chave literal), em vez de this.stock[productId]
        const available = this.stock[productId] ?? 0;
        resolve(available);
      }, this.latencyMs);
    });
  }

  async reserve(productId: string, qty: number): Promise<boolean> {
    const available = this.stock[productId] ?? 0;
    // BUG: usa '>' em vez de '>='; falha quando qty == available
    if (available >= qty) {
      this.stock[productId] = available - qty;
      return true;
    }
    return false;
  }
}
