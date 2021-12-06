// Function in almost everything.

console.log(typeof Object);

function imprimirSoma(a , b = 100){
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2,3,4,5,6);
imprimirSoma(10);

function test( ...params){
    console.log('TEST');
    let aux = 0;
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        aux += element;
    }
    
    console.log("aux", aux);
    
}

test(2,3,4,5,6);

let dobro = function(a){
    console.log('dobro ' + a * 2);
}

dobro(2);

// let triplo = (a) => {
//     console.log(a * 3);
// }

let triplo = a => 'triplo ' + 3 * a;

console.log(triplo(2));

// Function vs Object.

console.log(typeof Object)
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015(ES6)
console.log(typeof Produto)
console.log(typeof new Produto())