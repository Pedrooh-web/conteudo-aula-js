// Definindo uma array global
const times = ["Corinthians", "São Paulo", "Flamengo", "Fluminense"];

// Utilizando indexOf
let posicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(posicaoItem);

// Utilizando o lastIndexOf()
const times2 = ["Corinthians", "São Paulo", "Corinthians", "Flamengo"];

let posicaoItem2 = times2.lastIndexOf("Corinthians");

console.log(times2);
console.log(posicaoItem);

// Utilizando o método includes()
let verificaExistenciaItem = times.includes ("Palmeiras");

console.log(verificaExistenciaItem)