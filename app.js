//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];


function adicionarAmigo(){

    let nomeAmigo = document.querySelector('input').value
    if(nomeAmigo == ''){
        alert("Insira um nome válido");
    }else{
        listaAmigos.push(nomeAmigo);
        limparCampo();
        console.log("nome cadastrado")
        console.log(listaAmigos);
    }   
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
    
}