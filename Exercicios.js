function concatenar(lista1, lista2){
    let novaLista = [];
    novaLista = lista1.concat(lista2);
    return novaLista;
}

let minhaLista = [1,2,3];
let outraLista = [4,5,6];

let novaLista = concatenar(minhaLista, outraLista);
console.log(`A nova lista é ${novaLista}`);
let ultimaLista = novaLista.pop();
console.log(`A nova lista sem o último valor é ${novaLista}`);
console.log(shuffleArray(novaLista));


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
let listaDuplicada = [1,1,2,3,4,5,5,6];
console.log(verificarDuplicatas(listaDuplicada));

//Função para verificar carácteres duplicados

function verificarDuplicatas(lista){
    let novaLista = [];
    for(i=0;i<lista.length;i++){
        let primeiroValor = lista[i];
        if (novaLista.includes(primeiroValor)){
            continue
        }else{
            novaLista.push(primeiroValor);
        }
    }
    return novaLista;
}