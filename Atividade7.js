function filtrarNumeros(array) {
    var numeros = array.filter(function(elemento) {
      return typeof elemento === 'number';
    });
  
    return numeros;
  }
  console.log(filtrarNumeros([1, 'a', 2, 'b', 3, 'c']));                  // [1, 2, 3]
  console.log(filtrarNumeros([10, true, 'x', 20, null, 30]));           // [10, 20, 30]
  console.log(filtrarNumeros(['abc', false, 123, 'def', 456, 'ghi']));  // [123, 456]
    