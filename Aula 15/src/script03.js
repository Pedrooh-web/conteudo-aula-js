// Validação de Formulário
function validarForm() {
    if (formulario == "") {const formulario = document.forms["novoForm"]["texto"].value;
        alert("Por favor, insira um valor para o campo!");
        return false;
    }
}