function inverterValor(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return "Booleano ou Número esperados, mas o parâmetro é do tipo " + typeof parametro;
    }
  }
console.log(inverterValor(true));     // false
console.log(inverterValor(false));    // true
console.log(inverterValor(10));       // -10
console.log(inverterValor(-5));       // 5
console.log(inverterValor("texto"));  // Booleano ou Número esperados, mas o parâmetro é do tipo string
