
let meuArray = require('./jason')
let listaUsuarios = [];

function ContaBancaria (numeroConta, tipoConta, saldoConta, titularConta) {

    this.numero = numeroConta;
    this.tipo = tipoConta;
    this.saldo = saldoConta;
    this.titular = titularConta;

}    
for (i=0; i < meuArray.length; i++){
    listaUsuarios.push(new ContaBancaria(meuArray[i].numero, meuArray[i].tipo, meuArray[i].saldo, meuArray[i].titular))
}

// console.log(listaUsuarios)

let banco = {
    clientes: listaUsuarios,
    consultarCliente: function(titular) {

        for (i=0; i < this.clientes.length; i++) {
            return this.clientes[i];
        }

    }
}

console.log (banco.consultarCliente("Abigael Natte"));
