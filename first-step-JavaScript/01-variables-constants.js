// Types of variables
console.log("🚀 ~ a", a);
var a = 3;
console.log("🚀 ~ a", a);
let b = 4;

const c = 5;
// c = 50; ERROR
/**
 * O VAR mesmo fora do escopo vc consegue acessá-la. 
 * Isso não se aplica para o escopo de uma função.
 */
a = 10;
console.log("🚀 ~ a", a);
{ 
    { 
        { 
            { 
                var show = 'show';
                console.log(show);
            } 
        } 
    } 
}
console.log(show);

// function teste(){
//     var local = 123;
//     console.log("🚀 ~ var local ", local);   
// }

// teste();

var num1 = 1;
{
    var num1 = 2;
    console.log('var dentro =', num1);
}

console.log('var fora =', num1);

/**
 * O LET ele tem preferência para quem está dentro do escopo dele, caso ele 
 * não encotre o valor dentro do escopo dele, ele procura fora.
 */

 let num2 = 1;
 {
     let num2 = 2;
     console.log('let dentro =', num2);
 }
 
 console.log('let fora =', num2);

// VAR LOOP
for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =',i)

const funcs1 = [];

for (var i = 0; i < 10; i++) {
    //usando o push para adicionar valores no vetor usando uma função anonima
    funcs1.push(function(){
        console.log(i);
    });
    
}

funcs1[2]();
funcs1[8]();

// LET LOOP

// funcs[2]()
// funcs[8]()

const funcs2 = [];
// mudando para let realmente funciona
for (let i = 0; i < 10; i++) {
    //usando o push para adicionar valores no vetor usando uma função anonima
    funcs2.push(function(){
        console.log(i)
    });
    
}

//agora usando let realmente irá funcionar diferente do exemplo usando o VAR
funcs2[2]();
funcs2[8]();