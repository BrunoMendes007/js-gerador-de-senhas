const numeroSenha = document.querySeletor('parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySeletorAll('parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminiuTamanho(){
    if (tamanhoSenha >1){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const numeroSenha = document.querySelector('parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSeha > 1){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha + 1
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha){

    }
}
const numeroSenha = document.querySelector('parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSeha > 1){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha + 1
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '01234566789';
const simbolos = '!@*?';

geraSenha();

function geraSenha(){
    let alfabeto = '';
    if(checkbox[0].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha){
        let senha='';
        for (let i = 0; i)

    }
}
