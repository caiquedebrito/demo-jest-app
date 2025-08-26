// src/services/cart.ts
export interface CartItem {
  id: string;
  title: string;
  priceCents: number;
  qty: number;
}

type Coupon =
  | { type: 'percent'; value: number }  // ex.: 10 = 10%
  | { type: 'fixed'; value: number };   // em centavos

export class Cart {
  private items = new Map<string, CartItem>();
  private coupon?: Coupon;

  addItem(item: Omit<CartItem, 'qty'>, qty = 1) {
    if (qty <= 0) throw new Error('Invalid quantity');

    const existing = this.items.get(item.id);
    const newQty = (existing?.qty ?? 0) + qty;
    this.items.set(item.id, { ...item, qty: newQty });
  }

  removeItem(id: string) {
    this.items.delete(id);
  }

  setQty(id: string, qty: number) {
    if (qty <= 0) this.items.delete(id);
    const it = this.items.get(id);
    if (it) this.items.set(id, { ...it, qty });
  }

  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  applyCoupon(c: Coupon) {
    this.coupon = c;
  }

  totalCents(): number {
    const sum = this.getItems().reduce((acc, i) => acc + i.priceCents * i.qty, 0);

    if (this.coupon) {
      if (this.coupon.type === 'percent') {
        return Math.max(0, Math.round(sum - sum * (this.coupon.value / 100)));
      }
      if (this.coupon.type === 'fixed') {
        const desconto = this.getItems().reduce((acc, i) => acc + this.coupon!.value * i.qty, 0);
        return Math.max(0, sum - desconto);
      }
    }
    return sum;
  }
}
