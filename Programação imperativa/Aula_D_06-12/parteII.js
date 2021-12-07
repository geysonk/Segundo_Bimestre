function PopularArray(idade, opiniao){
    for (let i=1; i<=15; i++){
       this.idade = idade;
       this.opiniao = opiniao
    }
}

let telespectadores = [];

telespectadores.push (new PopularArray(20, "Ótimo"))
telespectadores.push (new PopularArray(23, "Ótimo"))
telespectadores.push (new PopularArray(18, "Regular"))
telespectadores.push (new PopularArray(30, "Ruim"))
telespectadores.push (new PopularArray(10, "Ótimo"))
telespectadores.push (new PopularArray(60, "Ruim"))
telespectadores.push (new PopularArray(20, "Ótimo"))
telespectadores.push (new PopularArray(17, "Regular"))
telespectadores.push (new PopularArray(22, "Ótimo"))
telespectadores.push (new PopularArray(30, "Ótimo"))
telespectadores.push (new PopularArray(20, "Ruim"))
telespectadores.push (new PopularArray(10, "Ótimo"))
telespectadores.push (new PopularArray(12, "Ruim"))
telespectadores.push (new PopularArray(25, "Ótimo"))
telespectadores.push (new PopularArray(30, "Ótimo"))
telespectadores.push (new PopularArray(20, "Regular"))

console.log(telespectadores)

let sexo1 = arquivos.filter(function(x) {
    if(x.sexo=="F"){
        return  x;
    }
    
});