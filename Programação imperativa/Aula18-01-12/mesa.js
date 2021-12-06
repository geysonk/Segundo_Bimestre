// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

function loopDePares (x) {
    for (let i=0; i<=100; i++){
       let numeroPar = (x + i)
       if (numeroPar%2 == 0){
            console.log(" O número "+ i + " é par")
        }
    }
}
loopDePares(10)

// Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.

function loopDeImpares (x, y) {
    for (let i=0; i<=100; i++){
       let numeroImpar = (x + i)
       if (numeroImpar%2 != 0){
            console.log(i + " - "+y)
        }
    }
}
loopDeImpares(10, "Impar")

// Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
// Exemplo: 
// soma(3) deve retornar 6 pois faz (1 +2 +3)
// soma(8) deve retornar 36

function soma(x) {
    let somaN = 0;
    for (let i=1; i <=x; i++){
        somaN += i;
    }
    return somaN
    
}

console.log((soma(10)))
