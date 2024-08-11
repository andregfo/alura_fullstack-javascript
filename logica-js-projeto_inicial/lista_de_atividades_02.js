//Chegamos em mais uma lista de atividades (não obrigatórias) para você praticar e reforçar ainda mais seu aprendizado.Bora?!


//Desafios
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador_crescente = 1;

while (contador_crescente < 11){
    console.log (contador_crescente)
    contador_crescente++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador_decrescente = 10;

while (contador_decrescente > 0){
    console.log (contador_decrescente)
    contador_decrescente--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = prompt('Informe um número: ');
let contador_regressivo = numero;

while(contador_regressivo >= 0){
    console.log(`Essa é a ${contador_regressivo}ª iteração de ${numero}`)
    contador_regressivo--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let meta = prompt('Informe a quantidade de repetições:');
let contador_progressivo = 0;

while (contador_progressivo <= meta){
    console.log(`Essa é a ${contador_progressivo}ª iteração da meta ${meta}`)
    contador_progressivo++;
}