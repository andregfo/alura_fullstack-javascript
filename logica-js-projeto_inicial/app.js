alert("Boas vindas ao jogo do número secreto!")

//let numeroSecreto = 6;

let numeroSecreto = parseInt(Math.random() * 100+1);
let acertou = false;
let tentativas = 1;

while (acertou != true){
    let chute = prompt('Escolha um número entre 1 e 100');

    if( chute == numeroSecreto){
    //console.log(`Isso aí! Você descobriu o número secreto na ${tentativas}ª tentiva!`);
    alert(`Isso aí! Você descobriu o número secreto na ${tentativas}ª tentiva!`);
        acertou = true;
    } else {
        tentativas++;        
        if(numeroSecreto > chute){
            //console.log('O número secreto é MAIOR!');
            alert('O número secreto é MAIOR!');
        } else {
            //console.log('O número secreto é MENOR!');
            alert('O número secreto é MENOR!');
        }
    }
}

//Operador ternário se          então                senão
let palavra = tentativas > 10 ? "Precisa melhorar!" : "Você é um Gênio!"
alert(palavra);