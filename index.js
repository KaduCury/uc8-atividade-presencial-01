let listaPecas=[]
let nomePeca='Peça Teste'
let pesoPeca=300
let podeCadastrar=true

if (pesoPeca<100){
    console.log('Não há possibilidade de cadastro pois a peça não atinge o peso mínimo!')
    podeCadastrar=false
}

if (listaPecas.length>10){
    console.log('Limite de peças cadastradas atingido!')
    podeCadastrar=false
}

if (nomePeca.length<3){
    console.log('Para cadastrar a peça seu nome tem de ter mais de três letras!')
    podeCadastrar=false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log('Peça cadastrada com sucesso!')
}   else{
    console.log('Houve um problema ao cadastrar a peça!')
    }

console.log('Listando as peças cadastradas.')
for (let i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}
