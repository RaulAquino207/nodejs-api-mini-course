const contadorA = require('./06instanciaUnica');
const contadorB = require('./06instanciaUnica');

//Esse () é para fazer a chamada da função factory
const contadorC = require('./07instanciaNova')();
const contadorD = require('./07instanciaNova')();

//Pelo fato de NODE fazer cache, mesmo eu incrementado o contador A ele também espelha em B
contadorA.incr();
contadorA.incr();
console.log(contadorA.valor,contadorB.valor);

//Uma das formas de resolver esse problema é usando a função factory
contadorC.incr();
contadorC.incr();
console.log(contadorC.valor, contadorD.valor);