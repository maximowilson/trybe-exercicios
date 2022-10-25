// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let result = 0;
for(let i = 1; i <= 50; i++) {
    result += i;
}
console.log('A soma total de 1 a 50 é: ' + result);


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;
for(let i = 2; i <= 150; i++) {
    if (i % 3 == 0) {
        contador ++;
    }
}
console.log(contador)
if(contador == 50) {
    console.log('Secret')
}

// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarol = 25;
let idadeMurilo = 30;
let idadeBaeta = 35;

if (idadeCarol < idadeMurilo && idadeCarol < idadeBaeta) {
    console.log('Carol é a mais nova!');
}
else if (idadeMurilo < idadeCarol && idadeMurilo < idadeBaeta) {
    console.log('Murilo é o mais novo');
}
