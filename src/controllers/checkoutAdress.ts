// src/controllers/checkout.ts

export const validateAddress = (address: string): boolean => {
    const regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return regex.test(address);
  };
  
  export const anotherFunction = () => {
    // outra função que você exporta
  };
  