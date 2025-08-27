export const calculateTax = (amount: number, taxRate: number): number => {
    if (amount < 0) {
      throw new Error('Amount must be positive');
    }
    return amount * taxRate;
  };
  