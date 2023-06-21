function somarNumeros(array) {
    var soma = 0;
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        soma += array[i];
      }
    }
  
    return soma;
  }
  console.log(somarNumeros([1, 2, 3, 4, 5]));                // 15
  console.log(somarNumeros([10, 20, 30, 40, 50]));          // 150
  console.log(somarNumeros([-1, 0, 1, 2, 3]));              // 5
  console.log(somarNumeros([5, 'a', 10, 'b', 15, 'c']));    // 30
    