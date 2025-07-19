// Resolução Exercicios 2 - desafios a/b/c

//Concatenando
const nome = "Maria";
const sobrenome = "Silva";
const nomeCompleto = nome + " " + sobrenome;
console.log("Nome completo:", nomeCompleto);

//Template string
const saudacao = `Olá, meu nome é ${nome} ${sobrenome}!`;
console.log(saudacao);

//Propriedade e métodos
console.log("Tamanho do nome:", nomeCompleto.length);
console.log("Em maiúsculas:", nomeCompleto.toUpperCase());
console.log("Em minúsculas:", nomeCompleto.toLowerCase());

// a) Extraindo o primeiro nome
const primeiroNome = nomeCompleto.slice(0, nome.length);
console.log("Primeiro nome extraído:", primeiroNome);

// b) Verificar se contém a letra "a"
const contemLetraA = nomeCompleto.includes("a");
console.log("Contém a letra 'a'?", contemLetraA);

// c) Substituindo o sobrenome
const nomeAlterado = nomeCompleto.replace("Silva", "Souza");
console.log("Nome com novo sobrenome:", nomeAlterado);