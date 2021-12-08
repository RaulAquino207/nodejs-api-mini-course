console.log(global);
// Dessa forma poderá ser alterado em qualquer módulo
global.MinhaApp = {
    saudacao(){
        return console.log('Estou em todos os lugares!')
    },
    nome: 'Sistema global'
}
console.log(global);