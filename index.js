// Funções para as operações matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero!';
    }
    return a / b;
}

// Função principal para calcular com base no input do usuário
function calcular() {
    // Recebe o primeiro número
    let num1 = parseFloat(prompt('Digite o primeiro número:'));

    // Recebe o operador (+, -, *, /)
    let operador = prompt('Escolha a operação (+, -, *, /):');

    // Recebe o segundo número
    let num2 = parseFloat(prompt('Digite o segundo número:'));

    // Variável para armazenar o resultado
    let resultado;

    // Realiza a operação com base no operador informado
    switch (operador) {
        case '+':
            resultado = soma(num1, num2);
            break;
        case '-':
            resultado = subtracao(num1, num2);
            break;
        case '*':
            resultado = multiplicacao(num1, num2);
            break;
        case '/':
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = 'Operação inválida';
    }

    // Exibe o resultado no console
    console.log('Resultado: ' + resultado);
}

// Chama a função de cálculo
calcular();
