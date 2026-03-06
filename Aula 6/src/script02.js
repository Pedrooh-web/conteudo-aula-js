// Utilização de método charAT()
let texto = "Abacate";
let exemploCharAt = texto.charAt(1);
console.log(exemploCharAt);

// Utilização do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);
console.log(exCharCodeAt);

// Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);

// utilização do método at()
let exAt = texto.at(-2);
let exAtComoArray = texto[2];
console.log(exAt);
console.log(exAtComoArray);

// Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);
console.log(texto3);

// Utilização do método slice()
let frutas = "Banana, Maçã e Uva";
let exSlice = frutas.slice(2);
console.log(exSlice);

// Utilização de toUpperCase( e toLowerCase
let carro = "Mazda rx7";
let carro2 = "SUPRA MK4";

let exLowerCase = carro2.toLowerCase()
let exUpperCase = carro.toUpperCase()

console.log(exLowerCase);
console.log(exUpperCase);

// Utilização do método isWellFormed()
let saudacao = "Olá, seja bem-vindo(a)!"
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);

// Utilização do método trim()
let Pedro = "                 Corinthiano maloqueiro e sofredor.                   "

let exTrim = Pedro.trim();
console.log(exTrim);