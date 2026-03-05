// Exercício 5: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do Trapézio.

alert("Área do Trapézio");

let B = parseFloat(prompt("Informe o valor da base maior: "));

let b = parseFloat(prompt("Informe o valor da base menor: "));

let altura = parseFloat(prompt("Informe o valor da altura "))

let resultado = ((B + b) * altura) /2;

alert("O valor da área do trapézio é: " + resultado);