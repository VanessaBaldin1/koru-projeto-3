// Resolução Exercicios 3 - desafios a/b/c

const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão:", a % b);
console.log("Potência:", a ** b);

let contador = 5;
console.log("Valor inicial:", contador);
console.log("Pós-incremento:", contador++);
console.log("Valor depois do pós-incremento:", contador);
console.log("Pré-incremento:", ++contador);
console.log("Valor final:", contador);


// Conversão de tipos
const numeroComoTexto = "42";
console.log("Tipo antes da conversão:", typeof numeroComoTexto);
const numeroConvertido = Number(numeroComoTexto);
console.log("Convertido:", numeroConvertido, typeof numeroConvertido);

// a) Média de três números
const media = (15 + 25 + 38) / 3;
console.log("Média dos três números:", media);

// b) Converter "123.45" para número
const valorTexto = "123.45";
const valorNumerico = parseFloat(valorTexto);
console.log("Convertido para número:", valorNumerico);

// c) Arredondar 9.7 / 2
const divisao = 9.7 / 2;
const arredondado = Math.round(divisao);
console.log("Resultado arredondado:", arredondado);
