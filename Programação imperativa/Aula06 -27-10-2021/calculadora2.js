// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar (a,b){
    return (a+b);
}
console.log (adicionar(20, 40))
// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao (a,b){
    return (a-b);
}
console.log (subtracao(20, 40))
// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao (a,b){
    return (a*b);
}
console.log (multiplicacao(20, 40))
// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao (a,b){
  return  a/b;
}
console.log (divisao(40, 20))

// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log (adicionar(20, 40))
console.log (subtracao(20, 40))
console.log (multiplicacao(20, 40))
console.log (divisao(40, 20))

// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
console.log(adicionar(5,2), " ", subtracao(5,2))
// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log (multiplicacao(5,3))
// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log (divisao(20, 4))
// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
console.log (divisao(20, 0))

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function quadradoNumero(x){
    return (multiplicacao(x,x))
}
console.log (quadradoNumero(7))

// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
function mediaDeTres (d,e,f){
    return (divisao((adicionar(d,e)+f),3))
}
console.log (mediaDeTres(2,4,6))
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.


// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).
function calculaPorcentagem1(numeroTotal1,porcentagem1){
    return multiplicacao((divisao(porcentagem1,100)),numeroTotal1) 
}
console.log (calculaPorcentagem1(300, 15))

// Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.


// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem1(z,w){
    return divisao((multiplicacao(z,100)),w) 
}
console.log (geradorDePorcentagem1(2,200))