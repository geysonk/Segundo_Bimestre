function podeSubir(altura, vemAcompanhado) {
    
    let podeSubir = true
   
    if (altura>1.40 || altura <2){
        podeSubir = true
    }else{
        podeSubir = false
    }
  
    if (altura=1.40 && vemAcompanhado){
        podeSubir = true
    }else{
        podeSubir = false
    }

    if (altura<1.20){
    podeSubir = false
    }
    return(podeSubir)
}

    console.log (podeSubir(1.10, vemAcompanhado))