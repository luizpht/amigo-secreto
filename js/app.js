let lista = [];

function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    if (nomeDoAmigo == ''){
        alert('Caixa de texto vazia');
        return;
    }
    if (lista.includes(nomeDoAmigo.toLowerCase())){
        alert('Esse nome já foi adicionado. Favor digitar sobrenome');
        return
    }
    lista.push(nomeDoAmigo.toLowerCase());
    let listaDeAmigos = document.getElementById('lista-amigos');
    if (listaDeAmigos.textContent == ''){
        listaDeAmigos.innerHTML = nomeDoAmigo;
    }else{
        listaDeAmigos.innerHTML = listaDeAmigos.textContent + ', ' + nomeDoAmigo;
    }
    document.getElementById('nome-amigo').value = '';

}

function sortear(){
    shuffleArray(lista);
    let listaDeSorteados = document.getElementById('lista-sorteio');
    if (lista.length>=4){
        for(i = 0; i<lista.length;i++){
            if ((i+1)<lista.length){
                listaDeSorteados.innerHTML = listaDeSorteados.innerHTML + lista[i] + '-->' + lista[i+1] + '<br>';
            }else{
                listaDeSorteados.innerHTML = listaDeSorteados.innerHTML + lista[i] + '-->' + lista[0];
            }
        }
    }else{
        alert('Número de participantes insulficiente.');
        return;
    }

}

// Função para randomizar array
function shuffleArray(lista) {
    // Loop em todos os elementos
for (let i = lista.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [lista[i], lista[j]] = [lista[j], lista[i]];
}
// Retornando array com aleatoriedade
return lista;
}



function reiniciar(){
    lista = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';

}