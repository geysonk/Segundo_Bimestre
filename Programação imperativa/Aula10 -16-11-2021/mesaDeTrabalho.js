// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no 
// console (você não precisa inverter o Array).

let numbers1 = ['10', '20', '30', '40', '50']

function imprimirInverso (x){

    return x.reverse()

}

console.log(imprimirInverso(numbers1))

// -
console.log('.....................................................................................................')
// -

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

let paises = ['Brasil', 'Argentina', 'Chile', 'Peru']

function inverter (y){

    return y.reverse()

}

console.log(inverter(paises))

// -
console.log('.....................................................................................................')
// -

// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

let numbers = [50,20,30]
let reducer = (previousValue, currentValue) => previousValue + currentValue;

function totalValores (c){
    
    return (numbers.reduce(reducer))

}

console.log(totalValores(numbers))

// -
console.log('.....................................................................................................')
// -

let text1 = ['O', 'l', 'á', '!']
let text2 = ['T', 'c', 'h', 'a', 'u', '!']

console.log(text1.join(''))
console.log(text2.join(''))

// -
console.log('1>.....................................................................................................')
// -

let filmes = ['Star Wars', 'Matrix', 'Mr. Robot', 'O preço do amanhã', 'A vida é bela'];

upper = function toupercase(d){

            return d.toUpperCase()

        } 

filmes = filmes.map(upper);

console.log(filmes)

// -
console.log('2>.....................................................................................................')
// -

let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function joinMovies(a,b){

    return ((a.join(' - ')+' - '+b.join(' - ')).split(' - '))

}

console.log(joinMovies(filmes, filmes2))

// -
console.log('3>.....................................................................................................')
// -

let removGame = filmes2.pop()

console.log(filmes2)
console.log (removGame.split())

// -
console.log('4>.....................................................................................................')
// -

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacao(k,l){

    if (k.join("|") === l.join("|")) {
    
        return("Os arrays são iguais");
    
    } else {
        
        return("Os arrays não são iguais");
    }    
}
console.log(comparacao(asiaScores, euroScores));