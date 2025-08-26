import { orderToJSON } from '../src/views/orderView';

test('snapshot de order', () => {
  const json = orderToJSON({ orderId: 'ord_123', paid: true, totalCents: 1299 });
  expect(json).toMatchInlineSnapshot(`
Object {
  "id": "ord_123",
  "status": "PAID",
  "totalBRL": "12,99",
}
`);
});
