for(let i=1;i<=50;i++){
    var qtdeDivisores=0
    for(let j=i;j>0;j--){
        if(i%j==0){
            qtdeDivisores++
        }
    }
    if (qtdeDivisores<=2){
        console.log('Os números primos da lista são: ',i)
    }
}
