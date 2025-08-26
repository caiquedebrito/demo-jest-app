import { InventoryService } from '../src/services/inventory';

describe('InventoryService', () => {
  it('retorna estoque disponível', async () => {
    const inv = new InventoryService({ p1: 3 }, 0);
    await expect(inv.getAvailable('p1')).resolves.toBe(3);
  });

  it('reserva quando há estoque suficiente (>=)', async () => {
    const inv = new InventoryService({ p1: 3 }, 0);
    await expect(inv.reserve('p1', 3)).resolves.toBe(true);
    await expect(inv.getAvailable('p1')).resolves.toBe(0);
  });
});
