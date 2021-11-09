function tempoDePreparo(comida,tempo) {

    let pipoca = 'Pipoca';
    let macarrao = 'Macarrão';
    let carne = 'Carne';
    let feijao = 'Feijão';
    let brigadeiro = 'Brigadeiro';

        switch (comida){
            case pipoca:
                if (tempo >=20 && tempo < 30){
                console.log ("Prato pronto, mas a "+comida+"queimou!") 
                }else if (tempo >= 30){
                console.log ("Kabum!!! Prato pronto")
                }else if (tempo < 10){
                console.log ("Prato pronto, mas tempo insuficiente!")
                }else{
                console.log ("Prato pronto, bom apetite!")
                }
                break;
            case macarrao:
                if (tempo >= 16 && tempo < 24){
                console.log ("Prato pronto, mas a "+comida+"queimou!") 
                }else if (tempo >= 24){
                console.log ("Kabum!!! Prato pronto")
                }else if (tempo < 8){
                console.log ("Prato pronto, mas tempo insuficiente!")
                }else{
                console.log ("Prato pronto, bom apetite!")
                }
                break;
            case carne:
                if (tempo >= 30 && tempo < 45){
                console.log ("Prato pronto, mas a "+comida+"queimou!") 
                }else if (tempo >= 45){
                console.log ("Kabum!!! Prato pronto")
                }else if (tempo < 15){
                console.log ("Prato pronto, mas tempo insuficiente!")
                }else{
                console.log ("Prato pronto, bom apetite!")
                }
                break;
            case feijao:
                if (tempo >= 24 && tempo < 36){
                console.log ("Prato pronto, mas a "+comida+"queimou!") 
                }else if (tempo >= 36){
                console.log ("Kabum!!! Prato pronto")
                }else if (tempo < 12){
                console.log ("Prato pronto, mas tempo insuficiente!")
                }else{
                console.log ("Prato pronto, bom apetite!")
                }
                break;
            case brigadeiro:
                if (tempo >= 16 && tempo < 24){
                console.log ("Prato pronto, mas a "+comida+"queimou!") 
                }else if (tempo >= 24){
                console.log ("Kabum!!! Prato pronto")
                }else if (tempo < 8){
                console.log ("Prato pronto, mas tempo insuficiente!")
                }else{
                console.log ("Prato pronto, bom apetite!")
                }
                break;
                default:
                    console.log ("Prato inexistente!")
            
        }
}
tempoDePreparo('Feijão', 3)
