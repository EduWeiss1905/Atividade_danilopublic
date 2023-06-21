function encontrarSegundoMaior(array) {
    if (array.length < 2) {
      return "O array deve conter pelo menos dois números.";
    }
  
    var maior = -Infinity;
    var segundoMaior = -Infinity;
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundoMaior = maior;
        maior = array[i];
      } else if (array[i] > segundoMaior && array[i] < maior) {
        segundoMaior = array[i];
      }
    }
  
    if (segundoMaior === -Infinity) {
      return "Não há segundo maior número no array.";
    } else {
      return segundoMaior;
    }
  }
  console.log(encontrarSegundoMaior([1, 2, 3, 4, 5]));         // 4
  console.log(encontrarSegundoMaior([10, 5, 20, 30, 15]));    // 20
  console.log(encontrarSegundoMaior([5, 5, 5, 5, 5]));        // Não há segundo maior número no array.
  console.log(encontrarSegundoMaior([5]));                   // O array deve conter pelo menos dois números.
    