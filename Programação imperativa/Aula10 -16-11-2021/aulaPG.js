let favoriteMovies = ['Contador', 'Sniper', 'Rei Artur', 'Venon']

//join - Junta todos os elementos de um array utilizando o separador especificado
console.log(favoriteMovies.join(', '))
//pop - Exclui o último elemento do array
console.log(favoriteMovies.pop())
//push - Adiciona um novo elemento no array
let addMovie = favoriteMovies.push('Thor:Ragnarock')
console.log(favoriteMovies)
//shift - Exclui o primeiro elemento do array
console.log(favoriteMovies.shift())
console.log(favoriteMovies)
//unshift - Adiciona um novo elemento no início do array
let addMovies1 = favoriteMovies.unshift('Vingadores:Ultimato')
console.log(favoriteMovies)

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log((grupoDeAmigos[0].join(' - ') + ' - ' + grupoDeAmigos[1].join(' - ')).split())

let str = "uma string qualquer"
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])