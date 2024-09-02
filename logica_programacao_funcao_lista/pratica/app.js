let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Espanto!'

function mostrarConsole(){
    console.log ('O botão CONSOLE foi clicado!')
}

function mostrarAlert(){
    alert('Eu amo JS!')
}

function perguntaCidade(){
    let cidade = prompt('Diga o nome de uma cidade do Brasil: ')
    alert(`Eu estive em ${cidade} e lembrei de você!`)
}

function somaDois(){
    let numeroUm =  parseInt(prompt('Informe um número inteiro: '))
    let numeroDois =  parseInt(prompt('Informe outro número inteiro: '))
    let resultado = numeroUm+numeroDois;
    alert(`A soma de ${numeroUm} e ${numeroDois} é ${resultado}`)
}