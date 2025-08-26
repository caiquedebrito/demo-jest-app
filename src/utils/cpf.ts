function onlyDigits(s: string): string {
  return (s || '').replace(/\D/g, ''); // Remove tudo que não for número
}

export function isValidCPF(cpf: string): boolean {
  cpf = onlyDigits(cpf);
  
  if (!cpf || cpf.length !== 11) return false;

  
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const nums = cpf.split('').map(d => parseInt(d, 10));

  
  let sum1 = 0;
  for (let i = 0; i < 9; i++) sum1 += nums[i] * (10 - i);
  let d1 = (sum1 * 10) % 11;
  if (d1 === 10 || d1 === 11) d1 = 0; 

  // Cálculo do segundo dígito verificador (D2)
  let sum2 = 0;
  for (let i = 0; i < 10; i++) sum2 += nums[i] * (11 - i);
  let d2 = (sum2 * 10) % 11;
  if (d2 === 10 || d2 === 11) d2 = 0; // Se D2 for 10 ou 11, o valor de D2 deve ser 0


  return d1 === nums[9] && d2 === nums[10];
}
