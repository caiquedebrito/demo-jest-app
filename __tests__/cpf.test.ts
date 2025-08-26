import { isValidCPF } from '../src/utils/cpf';

describe('isValidCPF', () => {
  it('deve validar CPFs válidos com máscara', () => {
    // CPF válido conhecido
    expect(isValidCPF('529.982.247-25')).toBe(true);
  });

  it('deve rejeitar CPFs inválidos ou com todos dígitos iguais', () => {
    expect(isValidCPF('111.111.111-11')).toBe(false);
  });

  it('deve rejeitar strings sem 11 dígitos numéricos', () => {
    expect(isValidCPF('abc')).toBe(false);
  });
});
