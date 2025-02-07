let listaDeNumerosSorteados = [];
let limiteDeNumerosSorteados = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabens');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto){
        exibirTextoNaTela('p','O numero secreto é maior');
    } else{
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }
    tentativas++
    limparCampo();
}
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * limiteDeNumerosSorteados + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosNaLista == limiteDeNumerosSorteados){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    console.log('função ativada');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}