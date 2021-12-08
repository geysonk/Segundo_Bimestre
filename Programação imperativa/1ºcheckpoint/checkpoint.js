function tempoDePreparo(tipoComida, tempoPreparo) {
    
    let pipoca = 'Pipoca'
    let macarrao = 'Macarrão'
    let carne = "Carne"
    let feijao = "Feijão"
    let brigadeiro = "Brigadeiro"
    
    if (tipoComida == pipoca && tempoPreparo>=20 && tempoPreparo<30) {
         return ("A comida queimou! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == pipoca && tempoPreparo<10) {
         return ("Tempo insuficiente! " + "Prato pronto, bom apetite!")
     }else if (tipoComida== pipoca && tempoPreparo>=30) {
         return ("Kabuuum! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == pipoca && tempoPreparo==10){
         return ("Prato pronto, bom apetite!")
     }else if (tipoComida == macarrao && tempoPreparo>=16 && tempoPreparo<24) {
         return ("A comida queimou! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == macarrao && tempoPreparo<8) {
         return ("Tempo insuficiente! " + "Prato pronto, bom apetite!")
     }else if (tipoComida== macarrao && tempoPreparo>=24) {
         return ("Kabuuum! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == macarrao && tempoPreparo==8){
          return ("Prato pronto, bom apetite!") 
     }else if (tipoComida == carne && tempoPreparo>=30 && tempoPreparo<45) {
         return ("A comida queimou! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == carne && tempoPreparo<15) {
         return ("Tempo insuficiente! " + "Prato pronto, bom apetite!")
     }else if (tipoComida== carne && tempoPreparo>=45) {
         return ("Kabuuum! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == carne && tempoPreparo==15){
          return ("Prato pronto, bom apetite!")
     }else if (tipoComida == feijao && tempoPreparo>=24 && tempoPreparo<36) {
         return ("A comida queimou! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == feijao && tempoPreparo<12) {
         return ("Tempo insuficiente! " + "Prato pronto, bom apetite!")
     }else if (tipoComida== feijao && tempoPreparo>=36) {
         return ("Kabuuum! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == feijao && tempoPreparo==12){
          return ("Prato pronto, bom apetite!")
     }else if (tipoComida == brigadeiro && tempoPreparo>=16 && tempoPreparo<24) {
         return ("A comida queimou! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == brigadeiro && tempoPreparo<8) {
         return ("Tempo insuficiente! " + "Prato pronto, bom apetite!")
     }else if (tipoComida== brigadeiro && tempoPreparo>=24) {
         return ("Kabuuum! " + "Prato pronto, bom apetite!")
     }else if (tipoComida == brigadeiro && tempoPreparo==8){
          return ("Prato pronto, bom apetite!")
     }else{
         return ("Prato inexistente!")
     }
     }
console.log(tempoDePreparo('Macarrão',7)) 