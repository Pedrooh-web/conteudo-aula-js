// Primeiro array
//const frutas = ['Laranja', 'Melancia', 'Melão', 'Uva'];

// console.log(frutas);

//AdicionandoAdicionando items ao array
const carros = [];

carros[0] = "Volkswagen";
carros[1] = "Fiat";
carros[2] = "Ferrari";

console.log(carros);


// Criando array com new Array
const cores = new Array ("Vermelho", "Amarelo", "Laranja");

console.log(cores);

console.log(cores[0]);

// Alterando elementos de array
// const frutas = ['laranja', 'Melancia', 'Melão', 'Uva'];

// frutas[0] = "Tangerina";

// console.log(frutas);

// Convertendo Array em String
// let stringFrutas = frutas.toString();

// console.log(stringFrutas);
// console.log(typeof frutas);

// Exemplo de elementos em array
const pessoa = {
    primeiroNome: "Pedro",
    ultimoNome: "Silva",
    idade: "20",
    país: "Brasil",
};

function minhaFuncao() {
    return "Ola";
};

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao;

console.log(meuArray);

// Acessando a propriedade length
const frutas = ['Laranja', 'Melancia', 'Melão', 'Uva'];

let fruta = frutas;

console.log(frutas);

// Usando forFach em Array
const elemento = document.querySelector('.ex1');
const comida = ["Pizza", "Sushi", "Macarrão", "Salada", "Carne"];

// Adicionando item no Array
comida.push("Coxinha")
comida.push("Kibe")
comida.push("Miojo");

let texto = "<ul>";

comida.forEach(retornaItem);

text = texto + "</ul>"

elemento.innerHTML = texto;

function retornaItem(item) {
    texto = texto + "<li>" + item + "</li";
}


console.log(comida);
