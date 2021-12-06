
function resultado1(nota){
    if(nota >= 7){
        console.log('aprovado');
    }else {
        console.log('reprovado');
    }
}

resultado1(6.7);
resultado1(9);


const resultado2 = nota => nota >= 7 ? 'aprovado' : 'reprovado';
console.log(resultado2(7.1));
console.log(resultado2(6.8));