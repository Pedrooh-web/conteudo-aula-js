// Exemplo de Condição Lógica: If e Else
let x = 8;

if (x == 5) {
    //console.log('A variável x é igual a 5');
}   else {
    //console.log('A variável x não é igual a 5!');
}

//Exemplo de Condição Lógica: IF
let y = 2;

if (y > 3) {
    console.log('A variável y é maior que 3');
 }   else if (y == 3 ) {
    console.log('A variável y é igual a 3')
    } else {
    console.log('A variável y possui um valor diferente das verificações.');
    }

    // Exemplo de if
    const elemento = document.getElementById('ex1');
    const pegarHoras = new Date().getHours();
    const pegarMinutos = new Date().getMinutes();
    const hora = String(pegarHoras) + ":" + String(pegarMinutos);

    if (pegarHoras > 18) {
        elemento.innerHTML = "Boa Noite!";
    }


    // Exemplo if 2
    let idade = 18;
    let texto = 'Você é novo demais para dirigir!';
    let resultado;

    if (idade >= 18) {
       texto = 'Você tem idade para dirigir!';
    }

    document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;
    document.getElementById('ex2').innerHTML = texto;

    //Exemplo IF Aninhado
    let idade2 = 16;
    let país = 'Estados Unidos';
    let mensagem = 'Você não pode dirigir!';

//if (país == 'Brasil') {
  //  if (idade2 >= 16 ) {
    //  mensagem = 'Você pode dirigir';
    //}    
//}

//document.getElementById('ex3').innerHTML = mensagem

// Exemplo de If Aninhado com operador AND ()
let idade3 = 16;
let país2 = 'Estados Unidos';
let mensagem2 = 'Você pode dirigir';

if (país2 == 'Estados Unidos' && idade3 == 16) {
    mensagem2 = 'Você pode dirigir'
}

document.getElementById('ex3').innerHTML = mensagem2;