/* 3- Altere o código um (1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Nathália Caroline Gumbio */

console.clear()
let teclado = require (`Prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 4;
let coluna = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz[z][x] = numero
    }
}

console.log(minhaMatriz);