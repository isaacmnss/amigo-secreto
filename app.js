let listaAmigos = [];


function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo == ''){
        alert("Insira um nome válido");
    }else{
        listaAmigos.push(nomeAmigo);
        limparCampo();
        exibirNaLista();
    }   
}

function exibirNaLista() {  
    let listaExibida = document.getElementById('listaAmigos');
    listaExibida.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaAmigos[i];
        listaExibida.appendChild(itemLista);
    }
}

function sortearAmigo(){
    let resultadoExibido = document.getElementById('resultado');
    if (listaAmigos.length < 1){
        alert("Cadastre pelo menos 2 amigos");
    }else{
       let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
       resultadoExibido.innerHTML = listaAmigos[amigoSorteado];
    }

}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}