// // -
// console.log('Impares====================================')
// // -
// // Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

// let impares = 1;

// while(impares<=100){

//     if (impares%2!=0){

//         console.log(impares)

//     }

//     impares ++;

// }
// // -
// console.log('Pares====================================')
// // -
// // Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
// let pares = 1;

// while(pares<=100){

//     if (pares%2==0){

//         console.log(pares)

//     }

//     pares ++;

// }
// Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
// let condiction = 1;

// function app(pa1){

//     while(condiction<=pa1){

//         if (condiction%2!=0){
//             console.log('Impar - '+condiction)
//         }else{
//             console.log('Par   - '+condiction)
//         }
//         condiction ++;
//     }
// }
// console.log(app(55))

const alice = [23, 69, 32]
const bob = [45, 69, 32]

function encontrarGanhador(a, b) {
  let ptsPrimeiroParticipante = 0
  let ptsSegundoParticipante = 0

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      ptsPrimeiroParticipante++
    } else if (a[i] < b[i]) {
      ptsSegundoParticipante++
    }
  }
  //return ptsPrimeiroParticipante > ptsSegundoParticipante ? "1o participante" : "2o participante";
  if (ptsPrimeiroParticipante > ptsSegundoParticipante) {
    return '1o participante'
  } else if (ptsSegundoParticipante > ptsPrimeiroParticipante) {
    return '2o participante'
  } else {
    return 'empate'
  }
}

console.log('O ganhador é: ' + encontrarGanhador(alice, bob))
