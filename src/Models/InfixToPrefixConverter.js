import { Stack } from './Stack.js';

class InfixToPrefixConverter {
    constructor() {
        this.precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '^': 3
        };
    }

    isOperand(char) {
        return /^[a-zA-Z0-9_]$/.test(char);
    }

    isOperator(char) {
        return ['+', '-', '*', '/', '^'].includes(char);
    }

    precedenceOf(operator) {
        return this.precedence[operator] || 0;
    }

    infixToPrefix(expression) {
        let prefix = '';
        let stack = new Stack();

        for (let i = expression.length - 1; i >= 0; i--) {
            let char = expression[i];

            if (this.isOperand(char)) {
                prefix = char + prefix;
            } else if (this.isOperator(char)) {
                while (!stack.isEmpty() && this.precedenceOf(stack.top.data) > this.precedenceOf(char)) {
                    prefix = stack.pop() + prefix;
                }
                stack.push(char);
            } else if (char === ')') {
                stack.push(char);
            } else if (char === '(') {
                while (!stack.isEmpty() && stack.top.data !== ')') {
                    prefix = stack.pop() + prefix;
                }
                stack.pop(); 
            }
        }

        while (!stack.isEmpty()) {
            prefix = stack.pop() + prefix;
        }

        return prefix;
    }
}

export { InfixToPrefixConverter };
