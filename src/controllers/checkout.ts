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

  // 1) valida estoque antes de qualquer cobrança
  for (const it of items) {
    const available = await inventory.getAvailable(it.id);
    if (available < it.qty) {
      throw new Error(`Sem estoque para ${it.id}: solicitado ${it.qty}, disponível ${available}`);
    }
  }

  // 2) reserva estoque (garante a disponibilidade)
  for (const it of items) {
    const ok = await inventory.reserve(it.id, it.qty);
    if (!ok) {
      throw new Error(`Produto ${it.id} sem estoque suficiente`);
    }
  }

  // 3) cobra o valor correto (converter centavos para reais)
  const amountBRL = totalCents / 100;
  const charged = await payment.charge(amountBRL);

  return {
    orderId: 'ord_' + charged,
    paid: true,
    totalCents
  };
}
