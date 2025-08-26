import { Cart } from '../services/cart';
import { InventoryService } from '../services/inventory';
import { PaymentGateway } from '../services/paymentGateway';

export interface OrderResult {
  orderId: string;
  paid: boolean;
  totalCents: number;
}

export async function checkout(
  cart: Cart,
  inventory: InventoryService,
  payment: PaymentGateway
): Promise<OrderResult> {
  const items = cart.getItems();
  // BUGs:
  // - Não aguarda checagem/reserva de estoque antes de cobrar
  // - Cobra com acréscimo arbitrário de 10%
  // - Passa centavos como se fossem reais
  const totalCents = cart.totalCents();
  const charged = await payment.charge(Math.round(totalCents * 1.10)); // errado

  // Reserva depois de cobrar e sem aguardar (errado)
  for (const it of items) {
    inventory.reserve(it.id, it.qty);
  }

  return {
    orderId: 'ord_' + charged,
    paid: true,
    totalCents
  };
}
