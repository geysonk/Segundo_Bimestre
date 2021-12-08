//Passo 7

// "Importando a funcao construtora de aluno (estudantes):"
let Aluno = require('./alunos');
// console.log(Aluno)

// "Importando o objeto literal curso:"
let curso = require('./curso')
// console.log(curso)

let rodrigo0 = new Aluno('Rodrigo', 0, [9, 9, 8, 7]);
let geyson0 = new Aluno('Geyson', 1, [9, 10, 9, 10]);
let guilherme0 = new Aluno('Guilherme', 2, [7, 9, 8, 8]);
let marcos0 = new Aluno('Marcos', 2, [7, 7, 7, 7]);
let ruggiero0 = new Aluno('Ruggiero', 1, [5, 5, 8, 6]);
let cecilia0 = new Aluno('Cecília', 1, [9, 7, 9, 6]);


//teste se o metodo calcularMedia esta funcionando:
// console.log(rodrigo0.calcularMedia()) 

//teste se o metodo adicionarFalta esta funcionando:
// rodrigo0.adicionarFalta()
// console.log(rodrigo0.faltas) 


// teste se o metodo adicionarAluno esta funcionando:
// curso.adicionarAluno(rodrigo0);
// console.log(curso.listaEstudantes); 

//teste se o metodo adicionarAluno  adiciona varios alunos de uma vez esta funcionando:
console.log(curso);
// curso.adicionarAluno(rodrigo, joao, douglas, barril, gabi, maria,marcela,juliane,debora,eva,moer);
// console.log(curso.listaEstudantes);

resultado = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaEstudantes.forEach((elemento) => resultado(elemento));

// resultado(geyson0)