//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let amigoSorteado = 0;
function adicionarAmigo(){
    let input = document.querySelector('input');
    let nomeAmigo = input.value;
    if (nomeAmigo == ''){
       return alert('Insira um nome');
    }else{
        listaAmigos.push(nomeAmigo);
        input.value = '';
        imprimirLista();
    }
    console.log(listaAmigos);
}

function imprimirLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML='';
    for (let i = 0; i <listaAmigos.length; i++){
        let imprimirNomes = document.createElement('li');
        imprimirNomes.innerHTML = listaAmigos[i];
        lista.appendChild(imprimirNomes);
    }
}

function sortearAmigo(){
    amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    console.log(amigoSorteado)
    imprimirAmigoSorteado(amigoSorteado)
}

function imprimirAmigoSorteado(i){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
    let imprimirResultado = document.createElement('li');
    imprimirResultado.innerHTML = `o amigo sorteado é ${listaAmigos[i]}`
    resultado.appendChild(imprimirResultado)
}