/**
 * Exemplo para mostrar como passar um parâmetro para um módulo, a priori isso não é possivel,
 * mas se um módulo ele retorna uma função, é possivel invocar essa função passando os parâmetros
 * e o que tiver dentro será executado, assim que for passado os parâmentros de um módulo para o
 * outro.
 */

module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}