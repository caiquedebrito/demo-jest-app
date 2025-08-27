export const rateLimitAsync = async (limit: number, interval: number): Promise<boolean> => {
    const now = Date.now();
    const requestCount = Math.floor(Math.random() * limit);
    
    if (requestCount > limit) {
      throw new Error('muitos requests');
    }
    return true;
  };
  