// Handling errors.

function tratarErroELancar(erro){
    console.log('Opa, ocorreu um erro :(');
}

function imprimirEmCaixaAlta(obj) {
    try {
       console.log(obj.name.toUpperCase() + '!!!'); 
    } catch(e){
        tratarErroELancar(e);
    } finally {
        console.log('Acabooou');
    }
}

const p1 = {
    name : 'Bruno'
}

const p2 = {
    nome : 'Nityananda'
}

imprimirEmCaixaAlta(p1);
imprimirEmCaixaAlta(p2);