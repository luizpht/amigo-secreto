// //Pegar o nome digitado e add a lista de amigos incluidos

// let listaDeNomes = [];

// function adicionar(){
//     let nomeDigitado = document.getElementById('nome-amigo').value;
//     if (nomeDigitado == ''){
//         alert('Nenhum nome digitado');
//         return;
//     }
//     listaDeNomes.push(nomeDigitado);
//     let amigosIncluidos = document.getElementById('lista-amigos');
//     if (amigosIncluidos.textContent.trim().length > 0) {
//         amigosIncluidos.textContent += ', ' + nomeDigitado;
//     } else {
//         amigosIncluidos.textContent = nomeDigitado;
//     }
//     document.getElementById('nome-amigo').value = '';
   
// }


// function sortear(){
//     shuffleArray(listaDeNomes);
//     let listaDeAmigos = document.getElementById('lista-sorteio');
    
//     for (i=0; i<listaDeNomes.length ;i++){
//         if((i+1)<listaDeNomes.length){
//          listaDeAmigos.innerHTML = listaDeAmigos.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[i+1] + '<br>';
//         }else{
//             listaDeAmigos.innerHTML = listaDeAmigos.innerHTML + listaDeNomes[i] + '-->' + listaDeNomes[0] + '<br>';  
//         }
       
//     }
 
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }


// function reiniciar(){
//     let listaDeNomes = [];
//     document.getElementById('lista-sorteio').textContent = '';
//     document.getElementById('lista-amigos').textContent = '';
// }