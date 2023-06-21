function calcularMediaEstudantes(estudantes) {
    var melhorDesempenho = {
      nome: '',
      media: -Infinity
    };
  
    for (var estudante in estudantes) {
      var notas = estudantes[estudante];
      var soma = 0;
  
      for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
      }
  
      var media = soma / notas.length;
  
      if (media > melhorDesempenho.media) {
        melhorDesempenho.nome = estudante;
        melhorDesempenho.media = media;
      }
    }
  
    return melhorDesempenho;
  }
  var estudantes = {
    "João": [7, 8, 9],
    "Maria": [6, 9, 8],
    "Pedro": [9, 9, 10]
  };
  
  var resultado = calcularMediaEstudantes(estudantes);
  console.log(resultado);  // { nome: "Pedro", media: 9.33 }
    