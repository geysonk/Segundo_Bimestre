// // Crie uma função que converta polegadas em centímetros. // Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
// function convert (polegadas) {
//     return polegadas*2.54
// }
// console.log(convert(1))

// // Crie uma função que receba uma string e a converta em um URL.// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
// function url (text) {
//     return "https://"+text+".com"
// }
// console.log(url("tropicosempresajr"))

// // Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
// function string (text2) {
//     return text2+"!"
// }
// console.log(string("my name is Geyson"))
// // Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
// function anoDoguinho (ano) {
//     return ano*7
// }
// console.log(anoDoguinho(10))
// // Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// // PS: considere que você trabalhe 160 horas no mês.
// function valorHora (salarioMensal, horaTrabalhada) {
//     return salarioMensal/horaTrabalhada
// }
// console.log(valorHora(2000,160))
// // Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores
// function calculadoraDeIMC (altura, peso) {
//     return peso/(altura*2)
// }
// console.log(calculadoraDeIMC(1.80,80))
// // Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// function string2 (text3) {
//     return text3.toUpperCase()
// }
// console.log(string2("hoje eu posso"))
// // Investigue o que o método de .toUpperCase() faz.
// // Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// function tipoDado (dado) {
//     return typeof(dado)
// }
// console.log(tipoDado("Hoje é dia!"))
// // Dica: Isso te ajudará a entender o que o operador typeof faz.
// // Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// // Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
// function convet2 (raio) {
//     return 2*3.14*raio
// }
// console.log(convet2(10))

// console.log(Math.random())

// // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
// // Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
// function somar(a,b) {
//     return a+b
// }
// console.log(somar(10,10))
// // Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
// function subtracao(ab,ba) {
//     return ab-ba
// }
// console.log(subtracao(10,10))
// // Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
// function multiplicacao(abc,bac) {
//     return abc*bac
// }
// console.log(multiplicacao(10,10))
// // Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
// function divisao(a,b) {
//     return a/b
// }
// console.log(divisao(10,10))

// // No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
// // console.log ("-------------- Teste de Operações / Calculadora --------------")
// // Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
// // Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// // Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// // Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

// let status1 = true;

// if (status1 = true) {
//     console.log("O valor é true!")
// } else {
//     console.log("O valor é false!")
// }

// let linguagem = " ";

// if (linguagem = "JavaScript") {
//     console.log("Eu estou aprendendo!")
// } else {
//     console.log("Aprenderei mais tarde!")
// }

// function podeSubir(altura, acompanhante) {
//     if (altura > 1.40 && altura < 2) {
//         return ("Poderá subir sem acompanhante!")
//     } else if (altura <1.40) {
//         return ("Deverá ir acompanhada!")
//     } else {
//         return ("Não poderá ir, nem se estiver acompanhada!")
//     }
// }
// console.log(podeSubir(1.80))

// CHECKPOINT 1

// let a = "Pipoca"
// let b = "Macarrão"
// let c = "Carne"
// let d = "Feijão"
// let e = "Brigadeiro"

// function prep(comida, tempoPreparo) {

//     switch (comida) {
//         case a:
//             if (tempoPreparo>20 && tempoPreparo<30){
//                 return "A comida queimou. Prato pronto, bom apetite!!!" 
//             } else if (tempoPreparo<10) {
//                 return "Tempo insuficiente. Prato pronto, bom apetite!!!"
//             } else if (tempoPreparo>30){
//                 return "Kabumm. Prato pronto, bom apetite!!!"
//             } else {
//                 return "Prato pronto, bom apetite!!!"
//             }
//         case b:
//             if (tempoPreparo>16 && tempoPreparo<24){
//                 return "A comida queimou. Prato pronto, bom apetite!!!" 
//             } else if (tempoPreparo<8) {
//                 return "Tempo insuficiente. Prato pronto, bom apetite!!!"
//             } else if (tempoPreparo>24){
//                 return "Kabumm. Prato pronto, bom apetite!!!"
//             } else {
//                 return "Prato pronto, bom apetite!!!"
//             }
//         case c:
//             if (tempoPreparo>30 && tempoPreparo<45){
//                 return "A comida queimou. Prato pronto, bom apetite!!!" 
//             } else if (tempoPreparo<15) {
//                 return "Tempo insuficiente. Prato pronto, bom apetite!!!"
//             } else if (tempoPreparo>45){
//                 return "Kabumm. Prato pronto, bom apetite!!!"
//             } else {
//                 return "Prato pronto, bom apetite!!!"
//             }
//         case d:
//             if (tempoPreparo>24 && tempoPreparo<36){
//                 return "A comida queimou. Prato pronto, bom apetite!!!" 
//             } else if (tempoPreparo<12) {
//                 return "Tempo insuficiente. Prato pronto, bom apetite!!!"
//             } else if (tempoPreparo>36){
//                 return "Kabumm. Prato pronto, bom apetite!!!"
//             } else {
//                 return "Prato pronto, bom apetite!!!"
//             }
//         case e:
//             if (tempoPreparo>16 && tempoPreparo<24){
//                 return "A comida queimou. Prato pronto, bom apetite!!!" 
//             } else if (tempoPreparo<8) {
//                 return "Tempo insuficiente. Prato pronto, bom apetite!!!"
//             } else if (tempoPreparo>24){
//                 return "Kabumm. Prato pronto, bom apetite!!!"
//             } else {
//                 return "Prato pronto, bom apetite!!!"
//             }
//     }
// }

// console.log(prep(a, 10))
    

// Crie um array que contenha nomes de produtos para compra. 

let meuArray = ['arroz', 'óleo', 'feijão', 'macarrão', 'carne']

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 
// console.log(meuArray.join(", "));
// console.log(meuArray.pop())
// console.log(meuArray)
// console.log(meuArray.push("carne"))
// console.log(meuArray)
// console.log(meuArray.shift())
// console.log(meuArray)
// console.log(meuArray.unshift("arroz"))
// console.log(meuArray.shift())
// console.log(meuArray)
// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)

// let meuArray2 = [1, 2, 3, 4, 5, 6]
// let soma = 0
// // function imprimirInverso (x) {
// //     console.log(x.reverse())
// // }
// // imprimirInverso(meuArray2);

// function inverter(x) {
//     return (x.reverse());
// }
// console.log(inverter(meuArray2));

function somarArray(x) {
    for (let i=0; i<meuArray2.length;i++){
        soma += meuArray2[i];
    }
}

console.log(soma)