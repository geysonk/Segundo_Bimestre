// // let bemVindo = () => 'Olá Mundo!';

// // let dobro = numero => numero * 2;

// // let soma = (a, b) => a + b;

// // let horaAtual = () => {
// //     let data = new Date();
// //     return data.getHours() + ':' +
// //     data.getMinutes();
// // }
// // console.log(horaAtual());


// // // setTimeout (function(){
// // //     console.log('Olá Mundo!')
// // // } , 1000)

// // function nomeCompleto(nome, sobrenome) {
// //     return nome+' '+ sobrenome
// // }

// // console.log(nomeCompleto('Geyson', 'Kaio'))

// // function bomDia(nome, sobrenome, callbcallback) {
// //     return 'Olá ' + callbcallback(nome, sobrenome)
// // }

// // console.log(bomDia('Geyson', 'Kaio', nomeCompleto))




// function acaoCarro(callback) {
//     return callback();
// }

// function andar() {
//     console.log('carro Andando');
// }

// function parar() {
//     console.log('carro parou');
// }
// acaoCarro(andar);
// acaoCarro(parar);

let fizzBuzz = (a,b) => {

    for (let i=1; i<=100; i++){
        if ((i%a==0) && (i%b==0)) {
            console.log ('FizzBuzz');
        }
        else if (i%a==0) {
            console.log('Fizz');
        }
        else if (i%b==0) {
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz (2,6);