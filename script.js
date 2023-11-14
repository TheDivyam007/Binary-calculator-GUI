function appendToInput(value, inputId) {
    const inputField = document.getElementById(inputId);
    inputField.value += value;
}

function calculate() {
    const num1 = parseInt(document.getElementById('num1').value, 2);
    const num2 = parseInt(document.getElementById('num2').value, 2);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = result.toString(2);
}
