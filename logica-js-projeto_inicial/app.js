alert("Boas vindas ao jogo do número secreto!")

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto){
    console.log('Isso aí! Você descobriu o número secreto!');
}

console.log('Rodando!')
let cont = 1;
while(cont < 11){
    console.log(`Volta ${cont}`);
    cont++;
}