// Calculadora I
//2
function adicionar(a,b){
    return (a+b);
}
console.log (adicionar(25, 100))

//3
function subtracao(a,b){
    return (a-b);
}
console.log (subtracao(25, 100))

//4
function multiplicacao(a,b){
    return (a*b)
}
console.log (multiplicacao(25, 100))

//5
function divisao(a,b){
    return (b/a)
}
console.log (divisao(25, 100))

//Calculadora II
//1
console.log ("-------------------------Teste de Operações / Calculadora JS-------------------------");

//2
console.log (adicionar(20,30), " e ", subtracao(50,40));

//3
console.log (multiplicacao (7, 7));

//4
console.log (divisao(2, 150));

//5
console.log (divisao(0, 150));

//Calculadora III
//1
function quadradoDoNumero (x){
    return (multiplicacao(x,x))
}
console.log(quadradoDoNumero(7));

//2
function mediaDeTresNumeros(x,y,z){
    return (divisao(3, adicionar(x,y) + z))
}
console.log(mediaDeTresNumeros(1,2,3));

//3
function calculaPorcentagem(numeroTotal, porcentagem){
    return (multiplicacao (numeroTotal, divisao(100, porcentagem)));
}
console.log (calculaPorcentagem(300,15));

//4
function geradorDePorcentagem(x,y){
    return (divisao (y, (multiplicacao(x,100))))
}
console.log (geradorDePorcentagem(2,200))