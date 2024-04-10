import { converterInstance } from './dependencias.js';

document.getElementById('convertButton').addEventListener('click', () => {
    const infixExpression = document.getElementById('infixInput').value;
    const prefixExpression = converterInstance.infixToPrefix(infixExpression);
    displayPrefix(prefixExpression);
});

function displayPrefix(prefix) {
    document.getElementById('prefixOutput').textContent = prefix;
}

