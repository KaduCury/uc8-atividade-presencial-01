var a=10
var b=20
var c=6
var delta=b*b-4*a*c
if (delta<0){
    console.log('Delta negativo! Não é possível obter X1 e X2!')
} else {
var raizDelta=Math.sqrt(delta)
var X1= (-b+raizDelta)/(2*a)
var X2= (-b-raizDelta)/(2*a)
console.log('Valor de X1 é' ,X1, 'Valor de X2 é' ,X2)
}
