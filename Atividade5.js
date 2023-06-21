function multiplicacaoSemOperador(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
  
    var resultado = 0;
    for (var i = 0; i < num1; i++) {
      resultado += num2;
    }
  
    return resultado;
  }
  console.log(multiplicacaoSemOperador(5, 3));   // 15
  console.log(multiplicacaoSemOperador(0, 7));   // 0
  console.log(multiplicacaoSemOperador(4, 0));   // 0
  console.log(multiplicacaoSemOperador(10, 2));  // 20
    