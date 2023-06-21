function calcularDiasDeVida(idade) {
    if (idade >= 0) {
      var quantidadeDias = idade * 365;
      return quantidadeDias;
    } else {
      return "Erro: Idade inválida. Por favor, insira um valor não negativo.";
    }
  }
console.log(calcularDiasDeVida(20));  // 7300
console.log(calcularDiasDeVida(35));  // 12775
console.log(calcularDiasDeVida(-10)); // Erro: Idade inválida. Por favor, insira um valor não negativo.