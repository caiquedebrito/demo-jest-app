interface RequestLog {
    ip: string;
    timestamp: number;
  }
  
  const requestLogs: RequestLog[] = [];
  
  export const isRequestAllowedFromIP = (ip: string, limit: number, interval: number): boolean => {
    const now = Date.now();
    const recentRequests = requestLogs.filter(log => log.ip === ip && now - log.timestamp < interval);
    
    if (recentRequests.length >= limit) {
      return false; // demasiados requests
    }
    
    requestLogs.push({ ip, timestamp: now });
    return true;
  };
  