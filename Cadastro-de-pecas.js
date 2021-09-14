let listaPecas=[ ]
let nomePeca='Peça Teste'
let pesoPeca=300
let podeCadastrar=true
const fg_red = '\x1b[31m'
const fg_green = '\x1b[32m'
const fg_yellow = '\x1b[33m'
const reset_color = '\x1b[0m'

if (pesoPeca<100){
    console.log(fg_red, 'Não há possibilidade de cadastro pois a peça não atinge o peso mínimo!', reset_color)
    podeCadastrar=false
}

if (listaPecas.length>10){
    console.log(fg_red, 'Limite de peças cadastradas atingido!', reset_color)
    podeCadastrar=false
}

if (nomePeca.length<3){
    console.log(fg_red, 'Para cadastrar a peça seu nome tem de ter mais de três letras!', reset_color)
    podeCadastrar=false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log(fg_green, 'Peça cadastrada com sucesso!', reset_color)
}   else{
    console.log(fg_red,'Houve um problema ao cadastrar a peça!', reset_color)
    }

console.log(fg_yellow, 'Listando as peças cadastradas.', reset_color)
for (let i=0;i<listaPecas.length;i++){
    console.log(fg_yellow, listaPecas[i], reset_color)
}
