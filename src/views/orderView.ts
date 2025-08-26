export function orderToJSON(order: { orderId: string; paid: boolean; totalCents: number }) {
  return {
    id: order.orderId,
    status: order.paid ? 'PAID' : 'PENDING',
    totalBRL: (order.totalCents / 100).toFixed(2).replace('.', ',')
  };
}
