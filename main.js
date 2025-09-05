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

