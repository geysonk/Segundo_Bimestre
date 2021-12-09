
// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.
// Passo 2 (função construtora)

let Aluno = function(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    
    this.calcularMedia = function() {
        return this.notas.reduce((a, b) => a + b)/this.notas.length
    };
    
    this.adicionarFalta = function() {
        return this.faltas++
    }
};

module.exports = Aluno;