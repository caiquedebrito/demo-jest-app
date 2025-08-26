# Projeto de Testes com Jest

Este repositório contém exemplos de testes unitários utilizando o Jest, abordando cenários como validação de CPF, operações em carrinho de compras e integração com gateways de pagamento. O objetivo é fornecer uma base para aprendizado e prática com testes em JavaScript/TypeScript.

## Estrutura do Repositório

### Branches

* **`main`**: Contém a implementação original do código com falhas intencionais nos testes. O objetivo é que o usuário corrija esses testes.
* **`add-nonfunctional-tests-with-errors`**: Contém testes que falham propositalmente para demonstrar cenários de falha.
* **`add-nonfunctional-tests-fixed`**: Contém os testes corrigidos, onde todos devem passar corretamente.
* **`fix/tests-green`**: Branch destinada à correção de testes que estavam falhando.

##  Casos de Testes

1. **Testar o lançamento de exceção quando a quantidade de item for inválida (< 1)**
2. **Testar o não lançamento da exceção quando a quantidade de item for válida (> 0)**
3. **Corrigir os bugs no código que falham nos testes**
4. **Testar a remoção de item do carrinho**
5. **Testar a adição de item no carrinho**
6. **Testar a classe `PaymentGateway`**

## Como Usar

### Clonando o Repositório

```bash
git clone https://github.com/caiquedebrito/demo-jest-app.git
cd demo-jest-app
```

### Instalando Dependências

```bash
npm install
```

### Executando os Testes

Para rodar os testes:

```bash
npm test
```

Para rodar os testes com cobertura de código:

```bash
npm run test:coverage
```

---

*Desenvolvido para fins educacionais e prática de testes unitários com Jest* ⚡
