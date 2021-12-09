let Aluno = require('./alunos2')

// Passo 3 (objeto literal)

let curso = {
    nomeDoCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [],

// Passo 4

    adicionarAluno: (nome, qtdfaltas, notas) => {
            curso.listaEstudantes.push(new Aluno(nome, qtdfaltas, notas));
        },

// Passo 5 (método)

    aprovarAluno: function(aluno) {
        let mediaDoAluno = aluno.calcularMedia()
        if (aluno.faltas < this.faltasMaximas && mediaDoAluno >= this.notaAprovacao) {
            return true;
        } else if (aluno.faltas == this.faltasMaximas && mediaDoAluno >= this.notaAprovacao*1.1) {
            return true;
        } else {
            return false;
        }
    },

// Passo 6 (método)

    listarAprovacoes: function() {
        let listaDeAprovados = [];
        this.listaEstudantes.forEach(elemento => {
            listaDeAprovados.push(this.aprovarAluno(elemento))
        })
        return listaDeAprovados
    }
}


// console.log(curso.listaEstudantes)
module.exports = curso;