
function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}
let espectadores = [];

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));


let var1 = espectadores.filter(function(x) {
    if(x.opiniao=="ótimo"){
        return  x;
    }
    
});
let var2 = var1.map(function(z){
    return z.idade
});

let comprimentoArray = var2.length

let soma1 = var2.reduce(function(a, b){
    return a+b
});

console.log("A média de altura das mulheredas idades é "+soma1/comprimentoArray)


//  2

let var3 = espectadores.filter(function(x) {
    if(x.opiniao=="regular"){
        return  x;
    }
    
});

console.log("Quantidade de pessoas que respondeu regular: "+var3.length)



// 3

let var4 = espectadores.filter(function(x) {
    if(x.opiniao=="bom"){
        return  x;
    }
});

console.log(var4)

let var5 = (var4.length/espectadores.length)*100

console.log(var5+"%")