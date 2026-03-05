// Exemplo de utilização do length em string
let texto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

// elemento.innerHTML = `
//    <style>
//     .container {
//       display: flex;
//       gap: 30px;
//       background-color: orange;
//     }
    
//     .container div{
//       width: 100px;
//       height: 100px;
//       background-color: blanchedalmond;
//     }
//   </style>

//   <h1>ESSE É UM NOVO H1</h1>
//   <div class="container">
//     <div>Item 1</div>
//     <div>Item 2</div>
//     <div>Item 3</div>
//   </div>
// `;


// Exemplo de utilização do caractere de escape
let texto2 = 'Somente o trauma \'coletivo\' gera a união.';

let texto3 = "Somente o trauma \"coletivo\" gera a união.";

let texto4 = "Somente o trauma \\ coletivo gera a união.";

let texto5 = `Somente o trauma \\ coletivo gera a união.`;

// console.log(texto2);
// console.log(texto3);
// console.log(texto4);
// console.log(texto5);

// Exemplo de template string
let nome = "Pedro Henrique"
let idade = 20;
let frase = `Meu nome é ${nome} e tenho ${idade} anos. `;

let frase2 = "Meu nome é " + nome + " e tenho " + idade + " anos.";

// console.log(frase2);

// Exemplo de adição de HTML com template string em JS
const elemento2 = document.querySelector('.ex2');
console.log (elemento2);

elemento2.innerHTML = `
    <style>
        .container {
         display: flex;
         justify-content: center;
         gap: 20px;
         background-color: orangered;
        }

        .container div {
          text-align: center;
          align-content: center;
          color: darkgreen;
          width: 100px;
          height: 100px;
          background-color: orange;
        }
    </style>

    <div class="container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
`;