document.addEventListener("DOMContentLoaded", function() {
    window.Calculadora = function() {
        // Obtendo o operador selecionado
        const operador = document.querySelector('input[name="opcao"]:checked');
        
        // Verifica se um operador foi selecionado
        if (!operador) {
            alert("Por favor, selecione uma operação.");
            return;
        }
        
        // Obtendo os valores dos números
        const number1 = parseFloat(document.getElementById("number1").value);
        const number2 = parseFloat(document.getElementById("number2").value);
        
        // Definindo o operador selecionado
        const op = operador.value;
        
        // Variável para armazenar o resultado
        let resultado;
        
        // Realizando o cálculo com base na operação selecionada
        switch (op) {
            case "+":
                resultado = number1 + number2;
                break;
            case "-":
                resultado = number1 - number2;
                break;
            case "*":
                resultado = number1 * number2;
                break;
            case "/":
                resultado = number1 / number2;
                break;
            default:
                resultado = 'Operação inválida';
        }
        
        // Exibindo o resultado
        alert("O resultado é: " + resultado);
    }
});