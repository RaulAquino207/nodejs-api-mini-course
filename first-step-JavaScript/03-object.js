// Object is a pair {key :  value}.

const produto = {};
produto.nome = 'Celular';

console.log(typeof produto);

const produto2 = {
    nome : 'Camisa',
    preco : 79.90,
}

const pessoa1 = {
    nome : 'Raul',
    idade : 18,
    endereco : {
        rua : 'Rua Capitão Manoel Bandeira',
        numCasa : 839
    }
}
console.log(pessoa1);

console.log(typeof Object, typeof new Object);

const obj1 = new Object;
console.log(obj1);

// Função construtora.
function Produto(nome, preco, desconto){
    this.nome = nome,

    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    }

    this.getPrecoProduto = () => {
        let msg = 'O preço do produto ' + nome + ' é ';
        return msg + preco;
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2000, 0.10);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas);
        }
    }
}

const fun1 = criarFuncionario('Raulzinho', 1000, 4);
const fun2 = criarFuncionario('Christian', 13000, 2);

console.log(fun1.getSalario(), fun2.getSalario());

fun1.nome = 'Raulzão';
fun1.idade = 80;
console.log(fun1);

//Object.preventExtensions - desse modo não se pode adicionar atributos ao meu obj, somente exclui-los
const p3 = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});

//Object.seal - Não é possível adicionar nem apagar atributos do meu obj, porém ainda é possível alterar

const pessoa2 = Object.freeze({
    nome: 'Raul',
    idade: 20,
    altura: 1.80
})