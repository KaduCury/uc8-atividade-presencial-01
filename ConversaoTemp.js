//1 - celsius, 2 - kelvin, 3 - farenheit
var tempOrigem=3
var tempDestino=2
var temperatura=36
var tempConvertida=temperatura

if (tempOrigem==1){
    if (tempDestino==2){
        tempConvertida=temperatura+273
    }   else if (tempDestino==3){
        tempConvertida=1.8*temperatura+32
    }   
}

if (tempOrigem==2){
    if (tempDestino==1){
        tempConvertida=temperatura-273
    }   else if (tempDestino==3){
        tempConvertida=(temperatura-273)*1.8+32
    }
}

if (tempOrigem==3){
    if (tempDestino==1){
    tempConvertida=temperatura-32/1.8
}   else if (tempDestino==2){
    tempConvertida=(temperatura-32)*1.8+273
    }
}

console.log('A temperatura convertida é:',tempConvertida)
