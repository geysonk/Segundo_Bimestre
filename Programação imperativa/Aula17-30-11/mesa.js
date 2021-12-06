let numerosPares = [ 4, 2, 2]

let funcao = numerosPares.map(function(callback){
    return callback/numerosPares.reduce(function(a,b){
        return a+b;
    })
})

console.log(funcao)
let numerosImpares = numerosPares.map(function(num){

return num+1;

})

// console.log(numerosImpares);


let nome = ["João", "Francisco", "Maria", "Maria "]

let nomeMaria = nome.filter(function(callback){
    return callback == 'Maria';
})

console.log(nomeMaria);

let numeros = [1,5,9,3,7]

let numerosFormatados = numeros.reduce(function(a, b){
    return a+" - "+b
})

console.log(numerosFormatados);

let animais = ['Cachorro', 'Gato', 'Galinha']

let animais1 = animais.forEach(function(item){
//    console.log ('O animal é '+ item)
});