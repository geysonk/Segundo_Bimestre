//1
function convercao(polegadas){
    return (polegadas * 2.54);
}
console.log (convercao(42))

//2
function string(texto){
    return "http://www." + texto + ".com.br"
}
console.log (string("youtube"));

//3
function string2(frase){
    return (frase + "!");
}
console.log(string2('"Hello dear"'));

//4
function idadeCachorro(x){
    return (x * 7);
}
console.log ("Meu cachorro tem " + idadeCachorro(11) + " anos!");

//5
function horaTrabalho(x){
    return (1045 / x);
}
console.log ("Recebendo 1.045 R$ por mês eu recebo " + horaTrabalho (89)+ " por hora trabalhada!");

//6
function calculadoraIMC(altura, peso){
    return (peso / altura * 2);
}
console.log (calculadoraIMC(1.80,86));

//7
function string3(ab){
   
    let var1= ab;
    let variavel1 = var1.toUpperCase();
    console.log (variavel1);
}
string3("happy birthday");

//8
function testeparametro(a){
    return typeof(a);
}
console.log (testeparametro("geyson"));

//9
function circunferencia(raio){
    let var2 = (2 * 3.14 * raio)
    var3 = Math.round(var2)
    console.log ("Comprimento circunferência = " + var3)
}
circunferencia(4)