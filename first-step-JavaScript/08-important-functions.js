// Simplest array functions.
console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados.pop());
aprovados.push('Raul')
console.log(aprovados);

// foreach
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}: PESSOA ${nome}`);
    console.log(array);
    console.log();
})

// map

const nums = [1,2,3,4,5];

let resultado1 = nums.map(function(num){
    return num * 2;
})

console.log(resultado1);

// filter

const produtos = [{
    nome: 'Notebook',
    preco: 2499,
    fragil: true
},{
    nome:'Ipad Pro',
    preco: 4199,
    fragil: true
},{
    nome: 'Copo de vidro',
    preco: 12.49,
    fragil: true
},{
    nome: 'Copo de plastico',
    preco: 1.99,
    fragil: false
},{
    nome: 'Porta alta',
    preco: 2000,
    fragil: false
}];

let produtosCaros = produtos.filter(function(p){
    if(p.preco >= 2000){
        return true;
    }else{
        return false;
    }
})

console.log(produtosCaros);

// reduce

const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado135 = alunos.map(e => e.nota).reduce(function(acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0);

console.log(resultado135/alunos.length);