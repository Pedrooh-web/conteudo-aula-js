// Alterando atributo
const elemento = document.querySelector(".ex1")

elemento.src = "tigrinho.png";
elemento.width = 800;

// Conteúdo dinâmico (data)
const elemento2 = document.querySelector("#ex2");

elemento2.innerHTML = "Data atual:  " + Date()
