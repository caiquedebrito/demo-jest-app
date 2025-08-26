export function isValidCPF(cpf: string): boolean {
  if (!cpf || cpf.length !== 11) return false;

  let sum1 = 0, sum2 = 0;
  for (let i = 0; i < 9; i++) sum1 += parseInt(cpf[i]) * (10 - i);
  const d1 = (sum1 * 10) % 11;

  for (let i = 0; i < 10; i++) sum2 += parseInt(cpf[i]) * (10 - i);
  const d2 = (sum2 * 10) % 11;

  return d1 === parseInt(cpf[9]) && d2 === parseInt(cpf[10]);
}
