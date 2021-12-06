// A very important thing called destructuring.

const pessoa = {
    nome: 'Ana',
    idade: 30,
    // sobrenome: 'Julia',  
    endereco: {
        rua: 'Rua Capitão Manoel Bandeira',
        numero: 839,
        cep: '61940-170'
    }
}

console.log(pessoa.nome, pessoa.idade);

const { nome : nomePessoa, idade : idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa);

const { endereco : { rua, numero, cep }} = pessoa; 
console.log("🚀 ~ rua, numero, cep", rua, 'num ' + numero, cep);

const [a] = [10];
console.log(a);
const [n1, ,n3, ,n5,n6 = 0] = [10, 7, 9, 8];
console.log(n1,n3,n5,n6);
const b = [10, 3, 5, 7, 12, 17];
const [m1 ,m2] = b;
console.log(m1,m2);
const [ ,[ ,nota]] = [[ ,8, 8],[9, 6, 8]];
console.log(nota);