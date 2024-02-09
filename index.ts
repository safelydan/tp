// define uma função 'soma' que recebe dois parâmetros do tipo número e retorna a soma deles.
const soma = (a: number, b: number) => {
    return a + b;
}

// chama a função 'soma' com os números 10 e 20. exibe o resultado.
console.log(soma(10, 20));

// tenta chamar 'soma' com uma string ('129' e 2). o typescript mostrará um erro de tipo.
console.log(soma('129', 2)); // erro: argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.

// tenta chamar 'soma' com valores booleanos (true, true). o typescript mostrará um erro de tipo.
console.log(soma(true, true)); // erro: argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'number'.

// tenta chamar 'soma' com valores booleanos (false, false). o typescript mostrará um erro de tipo.
console.log(soma(false, false)); // erro: argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'number'.

// tenta chamar 'soma' com valores booleanos (false, true). o typescript mostrará um erro de tipo.
console.log(soma(false, true)); // erro: argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'number'.

// tenta chamar 'soma' com um número e uma string (1.5, ' true'). o typescript mostrará um erro de tipo.
console.log(soma(1.5, ' true')); // erro: argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
