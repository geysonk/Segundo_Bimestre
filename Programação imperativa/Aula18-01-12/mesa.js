// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando 
// cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

let loopDePares = function (num) {
    for (let i=0; i<=100; i++){
        if (i + num%2 == 0){
            return(`O número ${i} é par`)
        } else {
            // console.log(`${i}`)
        }
    }
}
// console.log(loopDePares(100));

// Você deve criar uma função chamada loopDeImpares que receba um número 
// e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada 
// número do loop no console.
// Agora, modifique o código para que, caso esse número somado com 
// o número passado por parâmetro seja ímpar, mostre a palavra passada 
// por parâmetro no console.

let loopDeImpares = (num, palavra) => {
    for (let i = 0; i<=100; i++) {
        if ((i + num) % 2 != 0) {
            console.log(palavra)
         } else {
        // console.log(i);
    }
}
}
// loopDeImpares(11, "Esse numero é impar")

// Você deve criar uma função chamada soma que receba um número 
// como parâmetro e retorne a soma de todos os seus números anteriores, 
// incluindo o número recebido por parâmetro.
// Exemplo: 
// soma(3) deve retornar 6 pois faz (1 +2 +3)
// soma(8) deve retornar 36

let soma = (num) => {
    return num.reduce(function(a, b)) {
        console.log(a+b)
    }
        
}