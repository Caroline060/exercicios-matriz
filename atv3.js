/* 3- Altere o código um (1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Nathália Caroline Gumbio */
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 4;
var coluna = 2;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
