function onlyDigits(s: string): string {
  return (s || '').replace(/\D/g, '');
}

export function isValidCPF(cpf: string): boolean {
  cpf = onlyDigits(cpf);
  // BUGS:
  // - não remove máscara
  // - aceita todos dígitos iguais
  // - pesos/dígitos verificadores calculados de forma incorreta
  if (!cpf || cpf.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const nums = cpf.split('').map(d => parseInt(d, 10));

  let sum1 = 0, sum2 = 0;
  for (let i = 0; i < 9; i++) sum1 += nums[i] * (10 - i);
  const d1 = (sum1 * 10) % 11;

  for (let i = 0; i < 10; i++) sum2 += nums[i] * (10 - i); // pesos errados
  const d2 = (sum2 * 10) % 11;

  return d1 === nums[9] && d2 === nums[10];
}
